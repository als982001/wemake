import type { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Notifications | wemake" }];
};

export default function NotificationsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <div className="grid gap-6">{/* Notifications list will go here */}</div>
    </div>
  );
}
