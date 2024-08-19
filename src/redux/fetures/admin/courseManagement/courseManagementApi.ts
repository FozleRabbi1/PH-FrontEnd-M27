import { baseApi } from "../../../api/baseApi";

export const courseManegemnetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemester: builder.query({
    //   query: (query) => {
    //     const params = new URLSearchParams();
    //     if (query) {
    //       query.forEach((item: TQueryParam) => {
    //         params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
    //       });
    //     }
    //     return {
    //       url: "/academic-semister",
    //       method: "GET",
    //       params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcedemicSemester[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registation/create-semester-registation",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
