import { useOutletContext } from "react-router";

import { Button } from "~/common/components/ui/button";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";

import CreateReviewDialog from "../components/create-review-dialog";
import { ReviewCard } from "../components/review-card";
import { getReviews } from "../queries";
import type { Route } from "./+types/product-reviews-page";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const reviews = await getReviews(params.productId);

  return { reviews };
};

export default function ProductReviewsPage({
  loaderData,
}: Route.ComponentProps) {
  const { reviews } = loaderData;

  const { review_count } = useOutletContext<{ review_count: string }>();

  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviews </h2>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {reviews.map((review) => (
            <ReviewCard
              key={review.review_id}
              username={review.user.name}
              handle={review.user.username}
              avatarUrl={review.user.avatar}
              rating={review.rating}
              content={review.review}
              postedAt={review.created_at}
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
