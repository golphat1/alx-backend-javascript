// a function that returns the sum of all the student ids.

const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum;
