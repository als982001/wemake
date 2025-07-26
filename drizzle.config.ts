import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts", // schema: 데이터베이스 테이블의 정의
  out: "./app/migrations", // out: drizzle kit이 생성한 SQL 파일을 저장할 경로
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
