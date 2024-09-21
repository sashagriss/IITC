let gStudents = [
  {
    id: makeId(),
    fullName: "Sasha Griss",
    avgGrade: 80,
  },
  {
    id: makeId(),
    fullName: "Alla Mama",
    avgGrade: 80,
  },
  {
    id: makeId(),
    fullName: "Evgeny Papa",
    avgGrade: 80,
  },
];
function makeId() {
  let id = "";
  const possible =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

const elStudentList = document.getElementById("studentList");
for (let i = 0; i < gStudents.length; i++) {
  const student = gStudents[i];
  const elStudent = document.createElement("li");
  elStudent.innerHTML = `
   <div>${student.fullName}</div>
   <div>${student.avgGrade}</div>
   <button onclick="deleteStudent(`${student.id}`)">Delete</button>
   `;

  elStudentList.appendChild(elStudent);
}

function deleteStudent(studentId) {
  const newStudents = [];
  for (let i = 0; i < newStudents.length; i++) {
    const student = gStudents[i];
    if (student.id !== studentId) {
      newStudents.push(student);
    }
  }

  gStudents = newStudents;
  console.log(gStudents);
}
