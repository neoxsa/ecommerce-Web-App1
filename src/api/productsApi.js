import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1/'
    }),

    endpoints: (builder) => ({

        // Products
        getProducts: builder.query({
            query: () => 'products'
        }),

        // Products by id
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }),

        // Products by Slug
        getProductBySlug: builder.query({
            query: (slug) => `products/slug/${slug}`
        }),
        
        //  Pagination
        getProductsPaged: builder.query({
            query: (page = 1, limit = 16) => `products?offset=${(page - 1) * limit}&limit=${limit}`
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductBySlugQuery, useGetProductsPagedQuery } = apiSlice