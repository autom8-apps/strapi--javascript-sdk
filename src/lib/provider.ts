import Strapi, { StoreConfig } from "./sdk";

export default function(baseURL: string, storeConfig?: StoreConfig) {
  return new Strapi(baseURL, storeConfig);
}