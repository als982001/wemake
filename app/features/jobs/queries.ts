import client from "~/supa-client";

export const getJobs = async ({
  limit,
  location,
  type,
  salary,
}: {
  limit: number;
  location?: string;
  type?: string;
  salary?: string;
}) => {
  const baseQuery = client
    .from("jobs")
    .select(
      `
        job_id,
        position,
        overview,
        company_name,
        company_logo,
        company_location,
        job_type,
        location,
        salary_range,
        created_at
    `
    )
    .limit(limit);

  if (location) {
    baseQuery.eq("location", location as "remote" | "in-person" | "hybrid");
  }

  if (type) {
    baseQuery.eq(
      "job_type",
      type as "full-time" | "part-time" | "freelance" | "internship"
    );
  }

  if (salary) {
    baseQuery.eq(
      "salary_range",
      salary as
        | "$0 - $50,000"
        | "$50,000 - $70,000"
        | "$70,000 - $100,000"
        | "$100,000 - $120,000"
        | "$120,000 - $150,000"
        | "$150,000 - $250,000"
        | "$250,000+"
    );
  }

  const { data, error } = await baseQuery;

  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const getJobById = async (jobId: string) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", Number(jobId))
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};
