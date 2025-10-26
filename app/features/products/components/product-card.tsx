import { Link } from "react-router";

import { ChevronUpIcon, EyeIcon, MessageCircle } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface IProductCardProps {
  id: number | string;
  name: string;
  description: string;
  reviewsCount: string;
  viewsCount: string;
  votesCount: string;
}

export function ProductCard({
  id,
  name,
  description,
  reviewsCount,
  viewsCount,
  votesCount,
}: IProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block">
      <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>{reviewsCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
