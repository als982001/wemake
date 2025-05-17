import type { Route } from "../../../+types/features/products/pages/category-page";
import type { MetaFunction } from "@react-router/types";

export function meta({ params }: Route.MetaArgs): MetaFunction {
  return [
    { title: `${params.category} | ProductHunt Clone` },
    { name: "description", content: `Browse ${params.category} products` },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
    products: [], // Add category products fetch logic
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{loaderData.category}</h1>
      {/* Add category products grid */}
    </div>
  );
}
