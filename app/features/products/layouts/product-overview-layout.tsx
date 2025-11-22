import { Link, NavLink, Outlet } from "react-router";

import { ChevronUpIcon, StarIcon } from "lucide-react";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";
import { makeSSRClient } from "~/supa-client";

import { getProductById } from "../queries";
import type { Route } from "./+types/product-overview-layout";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data.product.name} Overview | wemake` },
    { name: "description", content: "View product details and information" },
  ];
}

export const loader = async ({
  request,
  params,
}: Route.LoaderArgs & { params: { productId: string } }) => {
  const { client, headers } = makeSSRClient(request);
  const product = await getProductById(client, {
    productId: params.productId,
  });

  return { product };
};

export default function ProductOverviewLayout({
  loaderData,
}: Route.ComponentProps) {
  const { product } = loaderData;

  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="size-40 rounded-xl shadow-xl bg-primary/50">
            <img
              src={product.icon}
              alt={product.name}
              className="size-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className=" text-2xl font-light">{product.tagline}</p>
            <div className="mt-5 flex item-center gap-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="size-4"
                    fill={
                      i < Math.floor(product.average_rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
              </div>
              <span className="text-muted-foreground ">
                {product.reviews} reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            variant={"secondary"}
            size="lg"
            asChild
            className="text-lg h-14 px-10"
          >
            <Link to={`/products/${loaderData.product.product_id}/visit`}>
              Visit Website
            </Link>
          </Button>
          <Button size="lg" className="text-lg h-14 px-10">
            <ChevronUpIcon className="size-4" />
            Upvote ({product.upvotes})
          </Button>
        </div>
      </div>
      <div className="flex gap-2.5">
        <NavLink
          end
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive && "bg-accent text-foreground "
            )
          }
          to={`/products/${product.product_id}/overview`}
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive && "bg-accent text-foreground "
            )
          }
          to={`/products/${product.product_id}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet
          context={{
            product_id: product.product_id,
            description: product.description,
            how_it_works: product.how_it_works,
            review_count: loaderData.product.reviews,
          }}
        />
        {/* Outlet을 통해 하위 라우트가 렌더링된다 */}
      </div>
    </div>
  );
}
