import { Link } from "react-router";

import { ChevronRightIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "~/common/components/ui/card";

interface CategoryCardProps {
  id: string | number;
  name: string;
  description: string;
}

export function CategoryCard({ id, name, description }: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${id}`} className="block">
      <Card>
        <CardTitle className="flex">
          {name} <ChevronRightIcon className="size-6" />
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </Card>
    </Link>
  );
}
