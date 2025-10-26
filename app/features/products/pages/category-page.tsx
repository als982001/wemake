import { dateMatchModifiers } from "react-day-picker";

import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";

import { ProductCard } from "../components/product-card";
import {
  getCategory,
  getCategoryPages,
  getProductsByCategory,
} from "../queries";
import type { Route } from "./+types/category-page";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer Tools | ProductHunt Clone` },
    { name: "description", content: `Browse Developer Tools products` },
  ];
};

const paramSchema = z.object({ category: z.coerce.number() });

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  console.log({ params, request });

  const url = new URL(request.url);

  const page = Number(url.searchParams.get("page") || 1);

  const { data, success } = paramSchema.safeParse(params);
  console.log("data", dateMatchModifiers);

  if (!success) throw new Response("Invalid category", { status: 400 });

  const category = await getCategory(data.category);

  const products = await getProductsByCategory({
    categoryId: data.category,
    page,
  });

  const totalPages = await getCategoryPages(data.category);

  return { category, products, totalPages };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { category, products, totalPages } = loaderData;

  return (
    <div>
      <Hero title={category.name} subtitle={category.description} />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewsCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={totalPages} />
    </div>
  );
}
