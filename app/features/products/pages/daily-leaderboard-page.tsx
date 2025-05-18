import { data, isRouteErrorResponse } from "react-router";

import { DateTime } from "luxon";
import { z } from "zod";

import type { Route } from "./+types/daily-leaderboard-page";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success) {
    throw data(
      { error_code: "invalid_praams", message: "Invalid params" },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

  if (!date.isValid) {
    throw data(
      { error_code: "invalid_date", message: "Invalid date" },
      { status: 400 }
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");

  if (date > today) {
    throw data(
      { error_code: "future_date", message: "Future date" },
      { status: 400 }
    );
  }

  return { date };
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daily Leaderboard</h1>
      {/* Add daily leaderboard content */}
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return <div>Unknown error</div>;
}
