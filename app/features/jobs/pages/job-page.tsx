import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Job Details" }];
};

export default function JobPage() {
  return <div>JobPage</div>;
}
