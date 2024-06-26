//import build from "next/dist/build";
import { apiSlice } from "./apiSlice"; 


const USERS_URL='https://event-backend-70e2.onrender.com/api/v1/users'
//const USERS_URL='http://localhost:8000/api/v1/users'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
            //data+> email/password
            query:(data) =>({
                url: `${USERS_URL}/login`,
                method:'POST',
                body:data
            })
        }),

        logout:builder.mutation({
            query:() =>({
                url:`${USERS_URL}/logout`,
                method:'POST'
            })
            
        }),
        register:builder.mutation({
            query:(data) =>({
                url:`${USERS_URL}/createUser`,
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Post'],
            
        }),
        events: builder.query({
            query: () =>  `${USERS_URL}/getUsers`,
            providesTags: ['Post']
          }),
          genderStats:builder.query({
            query: () => `${USERS_URL}/getGenderStats`,
            providesTags:['Post']
          }),
          stateStats:builder.query({
            query: () =>  `${USERS_URL}/getStateCount`,
                
            providesTags:['Post']
          }),
          getSingleUser:builder.query({
            query:(id)=>`${USERS_URL}/getUsers/${id}`
          })


       

    }),
    
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useEventsQuery, useGenderStatsQuery, useStateStatsQuery, useGetSingleUserQuery} = userApiSlice