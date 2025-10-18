import client from "~/supa-client";

const QUERY_NAME = "gpt_ideas_view";

export const getGptIdeas = async ({ limit }: { limit: number }) => {
  const { data, error } = await client
    .from(QUERY_NAME)
    .select("*")
    .limit(limit);

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};

export const getGptIdea = async (ideaId: string) => {
  const { data, error } = await client
    .from(QUERY_NAME)
    .select("*")
    .eq("gpt_idea_id", Number(ideaId))
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};
