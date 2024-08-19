import { TQueryParam, TResponseRedux, TSemester } from "../../../../types";
import { baseApi } from "../../../api/baseApi";

export const courseManegemnetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
          });
        }
        return {
          url: "/semester-registation",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registation/create-semester-registation",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
