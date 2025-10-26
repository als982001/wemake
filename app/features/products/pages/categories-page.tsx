import { Hero } from "~/common/components/hero";

import { CategoryCard } from "../components/category-card";
import { getCategories } from "../queries";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Category | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export const loader = async () => {
  const categories = await getCategories();

  return { categories };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <div className="space-y-10">
      <Hero title="Category" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            id={category.category_id}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
