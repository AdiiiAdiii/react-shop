import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "321x99ge",
  dataset: "production",
  apiVersion: "1",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
