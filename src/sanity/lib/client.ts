import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId: "drpn86eq",
  dataset: "production",
  apiVersion:"2025-01-01",
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
