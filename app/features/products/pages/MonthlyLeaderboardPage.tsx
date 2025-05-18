import type { Route } from "../../../+types/features/products/pages/monthly-leaderboard-page";
import type { MetaFunction } from "@react-router/types";

export function meta({ params }: Route.MetaArgs): MetaFunction {
  return [
    { title: `${params.month}/${params.year} Leaderboard | ProductHunt Clone` },
    {
      name: "description",
      content: `Top products of ${params.month}/${params.year}`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    products: [], // Add monthly leaderboard logic
  };
}

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {loaderData.month}/{loaderData.year}
      </h1>
      {/* Add monthly leaderboard content */}
    </div>
  );
}
