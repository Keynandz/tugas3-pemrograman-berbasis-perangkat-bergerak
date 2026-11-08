import type { TickersResponse } from './types'

const BASE_URL = 'https://api.coinlore.net/api/tickers/'

export async function fetchTickers(start: number = 0, limit: number = 100): Promise<TickersResponse> {
  const response = await fetch(`${BASE_URL}?start=${start}&limit=${limit}`)

  if (!response.ok) {
    throw new Error(`Gagal mengambil data dari API (status: ${response.status})`)
  }

  return (await response.json()) as TickersResponse
}
