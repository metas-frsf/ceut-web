import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";

export default defineConfig({
  name: "production",
  title: "CEUT FRSF",
  projectId: "q5d2lp9r",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
