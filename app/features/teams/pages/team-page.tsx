import type { Route } from "./+types/team-page";

export const meta: Route.MetaFunction = () => [
  { title: "Team Detail | wemake" },
];

export default function TeamPage() {
  return <div>TeamPage</div>;
}
