import { onMount } from 'svelte'
import { writable, type Writable } from 'svelte/store'

export type UseFetchResponse<T> = {
  data: Writable<T>
  isLoading: Writable<boolean>
  hasError: Writable<unknown | null>
  fetchData: (...args: unknown[]) => Promise<T | null>
}

export type UseFetchProps<T> = {
  fetchCall: (...args: unknown[]) => Promise<T>
  shouldFetchOnMount?: boolean
  onSuccess?: () => void
  onError?: () => void
}

export const useFetch = <T>({ fetchCall, onError, onSuccess, shouldFetchOnMount = true }: UseFetchProps<T>): UseFetchResponse<T> => {
  const data = writable<T>({} as T)
  const isLoading = writable<boolean>(false)
  const hasError = writable<unknown | null>(null)

  const fetchData = async (...args: unknown[]): Promise<T | null> => {
    isLoading.set(true)
    try {
      const resp = await fetchCall(args)
      data.set(resp)
      onSuccess && onSuccess()

      return resp
    } catch (error) {
      hasError.set(error)
      onError && onError()

      return null
    } finally {
      isLoading.set(false)
    }
  }

  onMount(() => {
    if (shouldFetchOnMount) {
      fetchData()
    }
  })

  return {
    data,
    fetchData,
    hasError,
    isLoading,
  } satisfies UseFetchResponse<T>
}
