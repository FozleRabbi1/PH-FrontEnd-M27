import { TAcedemicSemester } from "./academicManagment.types";

export type TSemester = {
  _id: string;
  academicSemester: TAcedemicSemester;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string;
};
