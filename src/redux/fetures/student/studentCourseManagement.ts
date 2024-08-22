import { TQueryParam, TResponseRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

export const studentCourse = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOfferedCourses: builder.query({
      providesTags: ["offeredCourse"],
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

    enrollCourse: builder.mutation({
      query: (data) => {
        return {
          url: "/enrolled-courses/create-enrolled-course",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["offeredCourse"],
    }),
  }),
});
