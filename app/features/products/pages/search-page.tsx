import { Form } from "react-router";

import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";

import { ProductCard } from "../components/product-card";
import { getPagesBySearch, getProductsBySearch } from "../queries";
import type { Route } from "./+types/search-page";

export const meat: Route.MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

const searchParams = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export async function loader({ request, params }: Route.LoaderArgs) {
  console.log({ params, request });

  const url = new URL(request.url);

  const { success, data: parsedData } = searchParams.safeParse(
    Object.fromEntries(url.searchParams)
  );

  if (!success) {
    throw new Error("Invalid params");
  }

  if (parsedData.query === "") {
    return { products: [], totalPages: 1 };
  }

  const products = await getProductsBySearch({
    query: parsedData.query,
    page: parsedData.page,
  });

  const totalPages = await getPagesBySearch({ query: parsedData.query });

  return { products, totalPages };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  const { products, totalPages } = loaderData;

  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        subtitle="Search for products by title or description"
      />
      <Form className="flex justify-center h-14 max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        Add commentMore actions
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
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}
