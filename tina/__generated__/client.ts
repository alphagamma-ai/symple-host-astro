import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '727463e228538cc82960dc01a9ad66e54b57d984', queries,  });
export default client;
  