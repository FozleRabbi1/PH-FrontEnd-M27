import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcedemicSemester } from "../../../types/academicManagment.types";
import { baseApi } from "../../api/baseApi";

export const academicManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
          });
        }
        return {
          url: "/academic-semister",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcedemicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
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
