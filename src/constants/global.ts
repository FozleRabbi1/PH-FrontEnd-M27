const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const genders = ["Female", "Male", "Other"];
export const bloodGroups = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const monthOptions = monthsName.map((item) => ({
  value: item,
  label: item,
}));

export const gendersOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroupsOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));
