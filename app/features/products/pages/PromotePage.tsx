import type { Route } from "../../../+types/features/products/pages/promote-page";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [
    { title: "Promote Product | ProductHunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    promotionOptions: [], // Add promotion options
  };
}

export default function PromotePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      {/* Add promotion options */}
    </div>
  );
}
