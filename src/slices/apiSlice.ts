import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const rawBaseQuery = fetchBaseQuery({
  baseUrl: 'https://',
})

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const state = api.getState() as RootState

  const urlEnd = typeof args === 'string' ? args : args.url
  const adjustedUrl = `${state.app.domain}${urlEnd}`
  const adjustedArgs =
    typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }

  return rawBaseQuery(adjustedArgs, api, extraOptions)
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: dynamicBaseQuery,
  endpoints: builder => ({
    apps: builder.mutation({
      query: data => ({
        url: '/api/v1/apps',
        method: 'POST',
        body: data
      })      
    })
  })
})

export const {
  useAppsMutation
} = apiSlice