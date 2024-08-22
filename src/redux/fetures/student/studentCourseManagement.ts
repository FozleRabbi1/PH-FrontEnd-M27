import { TQueryParam, TResponseRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

export const studentCourse = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOfferedCourses: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
          });
        }
        return {
          url: "/offered-course/my-offered-courses",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TOfferedCourse>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // changePassword: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/auth/change-password",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),
  }),
});
