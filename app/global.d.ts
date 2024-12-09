import {} from "hono";

type Head = {
  title?: string;
  description?: string;
  meta?: string;
};

declare module "hono" {
  type ContextRenderer = (
    content: string | Promise<string>,
    head?: Head & { frontmatter?: Head; description?: string },
  ) => Response | Promise<Response>;
}
