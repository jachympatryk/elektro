import { Builder } from "@better-typed/hyper-fetch";

import { ServerErrorType } from "./server.types";

export const contactBuilder = new Builder<ServerErrorType>({
  baseUrl: "https://hook.eu1.make.com",
});
