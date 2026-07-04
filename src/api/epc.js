const EPC_SEARCH_URL = '/api/epc/domestic/search'

export async function searchByPostcode(postcode) {
  const params = new URLSearchParams({ postcode: postcode.trim() })
  const response = await fetch(`${EPC_SEARCH_URL}?${params}`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    const text = await response.text()
    let message = text || `Search failed (${response.status})`

    try {
      const body = JSON.parse(text)
      message = body.error ?? body.message ?? message
    } catch {
      // keep text response
    }

    throw new Error(message)
  }

  const result = await response.json()
  return result.data ?? []
}

export function formatAddress(property) {
  return [
    property.addressLine1,
    property.addressLine2,
    property.addressLine3,
    property.addressLine4,
    property.postTown,
    property.postcode,
  ]
    .filter(Boolean)
    .join(', ')
}
