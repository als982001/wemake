import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Submit Job" }];
};

export default function SubmitJobPage() {
  return <div>SubmitJobPage</div>;
}
