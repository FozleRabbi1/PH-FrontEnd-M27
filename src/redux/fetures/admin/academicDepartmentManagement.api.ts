import { baseApi } from "../../api/baseApi";

export const academicDepartManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicDepartmentManagement: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
    }),
    addAcademicDepartmentManagement: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
