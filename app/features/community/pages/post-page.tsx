import { Form, Link } from "react-router";

import { ChevronUpIcon, DotIcon } from "lucide-react";
import { DateTime } from "luxon";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { Reply } from "~/features/community/components/reply";

import { getPostById } from "../queries";
import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = ({ params }) => {
  return [{ title: `${params.postId} | wemake` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const post = await getPostById(params.postId);

  return { post };
};

export default function PostPage({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  return (
    <div className="space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/community">Community</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/community?topic=${post.topic_slug}`}>
                {post.topic_name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/community/postId`}>{post.title}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 space-y-10">
          <div className="flex w-full items-start gap-10">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{post.upvotes}</span>
            </Button>
            <div className="space-y-20">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author_name}</span>
                  <DotIcon className="size-5" />
                  <span>{DateTime.fromISO(post.created_at).toRelative()}</span>
                  <DotIcon className="size-5" />
                  <span>{post.replies} replies</span>
                </div>
                <p className="text-muted-foreground w-3/4">{post.content}</p>
              </div>
              <Form className="flex items-start gap-5 w-3/4">
                <Avatar className="size-14">
                  <AvatarFallback>N</AvatarFallback>
                  <AvatarImage src="https://github.com/serranoarevalo.png" />
                </Avatar>
                <div className="flex flex-col gap-5 items-end w-full">
                  <Textarea
                    placeholder="Write a reply"
                    className="w-full resize-none"
                    rows={5}
                  />
                  <Button>Reply</Button>
                </div>
              </Form>
              <div className="space-y-10">
                <h4 className="font-semibold">{post.replies} Replies</h4>
                <div className="flex flex-col gap-5">
                  <Reply
                    username="Nicolas"
                    avatarUrl="https://github.com/serranoarevalo.png"
                    content="I've been using Todoist for a while now, and it's really great. It's simple, easy to use, and has a lot of features."
                    timestamp="12 hours ago"
                    topLevel
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>{post.author_name[0]}</AvatarFallback>
              {post.author_avatar ? (
                <AvatarImage src={post.author_avatar} />
              ) : null}
            </Avatar>
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-medium">{post.author_name}</h4>
              <Badge variant="secondary" className="capitalize">
                {post.author_role}
              </Badge>
            </div>
          </div>
          <div className="gap-2 text-sm flex flex-col">
            <span>
              🎂 Joined {DateTime.fromISO(post.author_created_at).toRelative()}{" "}
              ago
            </span>
            <span>🚀 Launched {post.products} products</span>
          </div>
          <Button variant="outline" className="w-full">
            Follow
          </Button>
        </aside>
      </div>
    </div>
  );
}
