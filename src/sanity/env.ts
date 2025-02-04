export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skaOkODllgjBqbbAlVAenl2oQCkVN76h9Vg9EjDamsi9IfbBYjHrFyi4vIc0KgWC6G61UZY7W4o9dOQdAicghkDc8Q2fzUM1LayLWZEGDSM2O0bor3yx3a40YAlSweLHUq40M0bMfyG3siaLr6IWUskVLkeBLI68tljuPkbRm73Kjg7lATc9",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
