import { apiSlice } from "./apiSlice"; 
const USERS_URL='http://localhost:3001/api/v1/users'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
            //data+> email/password
            query:(data) =>({
                url: `${USERS_URL}/login`,
                method:'POST',
                body:data
            })
        })

        // getUser:builder.query({
        //     query:() =>`${EMPLOYEE_ENDPOINT}/posts`,
        //     providesTags:['Employee']
        // }),


       

    })
})

export const {useLoginMutation} = userApiSlice