import type { Route } from "./+types/categories-page";

import { Hero } from "~/common/components/hero";

import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Category | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero title="Category" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            id={`categoryId-${index}`}
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
