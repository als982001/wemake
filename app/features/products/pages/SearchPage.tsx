import type { Route } from "../../../+types/features/products/pages/search-page";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  return {
    query,
    results: [], // Add search logic
  };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {/* Add search results */}
    </div>
  );
}
