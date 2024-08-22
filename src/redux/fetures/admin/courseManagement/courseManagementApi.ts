// import { TQueryParam, TResponseRedux, TSemester } from "../../../../types";
// import { baseApi } from "../../../api/baseApi";

// export const courseManegemnetApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllRegisteredSemester: builder.query({
//       query: (query) => {
//         const params = new URLSearchParams();
//         if (query) {
//           query.forEach((item: TQueryParam) => {
//             params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
//           });
//         }
//         return {
//           url: "/semester-registation",
//           method: "GET",
//           params,
//         };
//       },
//       providesTags: ["semester"],
//       transformResponse: (response: TResponseRedux<TSemester[]>) => {
//         return {
//           data: response.data,
//           meta: response.meta,
//         };
//       },
//     }),
//     addRegisteredSemester: builder.mutation({
//       query: (data) => ({
//         url: "/semester-registation/create-semester-registation",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["semester"],
//     }),
//     updateRegisteredSemester: builder.mutation({
//       query: (args) => ({
//         url: `/semester-registation/${args?.id}`,
//         method: "PATCH",
//         body: args.data,
//       }),
//       invalidatesTags: ["semester"],
//     }),

//     getAllCourses: builder.query({
//       query: (query) => {
//         const params = new URLSearchParams();
//         if (query) {
//           query.forEach((item: TQueryParam) => {
//             params.append(item?.name, item?.value as string); //note: P.apperd এর মধ্যে string e দিতে হবে
//           });
//         }
//         return {
//           url: "/courses",
//           method: "GET",
//           params,
//         };
//       },
//       providesTags: ["courses"],
//       transformResponse: (response: TResponseRedux<any>) => {
//         return {
//           data: response.data,
//           meta: response.meta,
//         };
//       },
//     }),
//     addCourse: builder.mutation({
//       query: (data) => ({
//         url: "/courses/create-course",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["courses"],
//     }),
//     addFaculties: builder.mutation({
//       query: (args) => ({
//         url: `/courses/${args.courseId}/assign-faculties`,
//         method: "PUT",
//         body: args.data,
//       }),
//       invalidatesTags: ["courses"],
//     }),
//   }),
// });

import { TQueryParam, TResponseRedux, TSemester } from "../../../../types";
import { baseApi } from "../../../api/baseApi";

export const courseManegemnetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registation",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `/semester-registation/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: `/courses/create-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
    addFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["courses"],
    }),
    getCourseFaculties: builder.query({
      query: (id) => {
        return {
          url: `/courses/${id}/get-faculties`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createOfferedCourse: builder.mutation({
      query: (data) => ({
        url: `/offered-course/create-offered-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});
