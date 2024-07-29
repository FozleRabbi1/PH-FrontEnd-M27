import { baseApi } from "../../api/baseApi";

export const academicFacultyManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
