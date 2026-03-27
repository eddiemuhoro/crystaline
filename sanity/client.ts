import { createClient } from "next-sanity";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3hro2ff6";
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});
