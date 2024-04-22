// function that receives two arguments
// departmentName(STRING)
// employees (Array of String)

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}
