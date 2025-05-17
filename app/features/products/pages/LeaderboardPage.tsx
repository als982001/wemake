import type { Route } from "../../../+types/features/products/pages/leaderboard-page";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [
    { title: "Leaderboard | ProductHunt Clone" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    topProducts: [], // Add leaderboard logic
  };
}

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      {/* Add leaderboard content */}
    </div>
  );
}
