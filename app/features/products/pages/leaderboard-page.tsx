import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/leaderboard-page";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Top products leaderboard" },
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="The most popular products on wemake."
      />
      {/* Daily Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
            />
          );
        })}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/daily" reloadDocument>
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      {/* Weekly Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by week.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
            />
          );
        })}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/weekly" reloadDocument>
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      {/* Monthly Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by month.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
            />
          );
        })}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/monthly" reloadDocument>
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      {/* Yearly Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by year.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
            />
          );
        })}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/yearly" reloadDocument>
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
