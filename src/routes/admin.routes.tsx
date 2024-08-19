/* eslint-disable @typescript-eslint/no-explicit-any */

import AcademicDepartment from "../pages/admin/AcademicDepartmentManagment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/admin/AcademicDepartmentManagment/CreateAcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicFacultyManagment/AcademicFaculty";
import CreateAcademicFaculty from "../pages/admin/AcademicFacultyManagment/CreateAcademicFaculty";
import AcademinSemester from "../pages/admin/AcademinSemesterManagment/AcademinSemester";
import CreateAcademinSemester from "../pages/admin/AcademinSemesterManagment/CreateAcademinSemester";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";
import StudentData from "../pages/admin/UserManagement/StudentData";
import StudentDetails from "../pages/admin/UserManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/CourseManagement/SemesterRefistration/SemesterRegistration";
import RegistardSemester from "../pages/admin/CourseManagement/SemesterRefistration/RegistardSemester";
import CreateCourse from "../pages/admin/CourseManagement/Course/CreateCourse";
import Courses from "../pages/admin/CourseManagement/Course/Courses";
import OfferedCourse from "../pages/admin/CourseManagement/OfferCourse/OfferedCourse";
import OffereCourse from "../pages/admin/CourseManagement/OfferCourse/OffereCourse";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Academic Managment",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademinSemester />,
      },
      {
        name: "Academin Semester",
        path: "academic-semester",
        element: <AcademinSemester />,
      },

      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academin Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },

      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academin Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Managment",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "student-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
  {
    name: "Course Managment",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semester",
        path: "registered-semester",
        element: <RegistardSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Course",
        path: "course",
        element: <Courses />,
      },
      {
        name: "Offer Course ",
        path: "offer-course",
        element: <OffereCourse />,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: TRout[], item) => {
//   if (item.element && item.path) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.name && item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminSideBarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.name && item.path) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
