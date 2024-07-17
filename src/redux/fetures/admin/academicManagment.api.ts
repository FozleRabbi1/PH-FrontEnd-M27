import { baseApi } from "../../api/baseApi";

export const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semister",
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          data: response.data,
          //   meta: response.meta, // meta backend থেকে পাঠানো হয়নি
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semister/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
