/* a function  that returns an array of students for a specific city with their new grade */
/* accept a list of students (from getListStudents), a city (String), and newGrades */
/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    const studentsInCity = students.filter((student) => student.location === city);
    return studentsInCity.map((student) => {
      const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
      if (filteredGrades.length > 0) {
        return {
          ...student,
          grade: filteredGrades[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
  }
  
  export default updateStudentGradeByCity;
