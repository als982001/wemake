import type { MetaFunction } from "react-router";

export interface LoaderData {
  title: string;
  description: string;
}

export interface ActionData {
  status: number;
  message: string;
}

export interface Route {
  LoaderArgs: {
    request: Request;
  };
  ActionArgs: {
    request: Request;
  };
  MetaFunction: MetaFunction<LoaderData>;
  ComponentProps: {
    loaderData: LoaderData;
    actionData?: ActionData;
  };
}
