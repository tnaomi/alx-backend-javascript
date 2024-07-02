function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  const stuCity = students.filter((student) => student.location === city);

  const stuGraded = stuCity.map((student) => {
    const stuGradeFilter = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );

    let grade;

    if (stuGradeFilter[0]) {
      grade = stuGradeFilter[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

  return stuGraded;
}

export default updateStudentGradeByCity;
