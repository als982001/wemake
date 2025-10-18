import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { DateTime } from "luxon";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";

import { getGptIdea } from "../queries";
import type { Route } from "./+types/idea-page";

export const meta = ({
  data: {
    idea: { gpt_idea_id, idea },
  },
}: Route.MetaArgs) => {
  return [
    { title: `Idea #${gpt_idea_id}: ${idea} | wemake` },
    { name: "description", content: "Find ideas for your next project" },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  console.log(params);

  const { ideaId } = params;

  const idea = await getGptIdea(ideaId);

  return { idea };
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
  const { idea } = loaderData;

  return (
    <div className="">
      <Hero title={`Idea #${idea.gpt_idea_id}`} />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          "A startup that creates an AI-powered generated personal trainer,
          delivering customized fitness recommendations and tracking of progress
          using a mobile app to track workouts and progress as well as a website
          to manage the business."
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            <span>{idea.views}</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span>{DateTime.fromISO(idea.created_at).toRelative()}</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>{idea.likes}</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
