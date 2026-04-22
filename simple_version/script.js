// ============================================
// Student Marks Management System
// Subjects: DSA, Python, FOE, CLA
// ============================================

const SUBJECTS = ["DSA", "Python", "FOE", "CLA"];

// ---- Real student data ----
let allStudents = [
  { name: "Bhavishya Choudhary",      roll: "2K25CSUN01260", DSA: 78, Python: 85, FOE: 72, CLA: 80 },
  { name: "Bhavy Jain",               roll: "2K25CSUN01262", DSA: 88, Python: 91, FOE: 84, CLA: 87 },
  { name: "Duke Dhawan",              roll: "2K25CSUN01270", DSA: 67, Python: 73, FOE: 70, CLA: 68 },
  { name: "Ekaksh Jeena",             roll: "2K25CSUN01271", DSA: 82, Python: 79, FOE: 76, CLA: 81 },
  { name: "Jasleen Kaur Bhinder",     roll: "2K25CSUN01282", DSA: 91, Python: 88, FOE: 90, CLA: 89 },
  { name: "Jason Sonu Mathew",        roll: "2K25CSUN01283", DSA: 64, Python: 69, FOE: 66, CLA: 70 },
  { name: "Kali Jindal",              roll: "2K25CSUN01284", DSA: 86, Python: 83, FOE: 88, CLA: 85 },
  { name: "Kashish Dagar",            roll: "2K25CSUN01287", DSA: 72, Python: 75, FOE: 71, CLA: 74 },
  { name: "Kumar Vijay",              roll: "2K25CSUN01291", DSA: 60, Python: 65, FOE: 62, CLA: 64 },
  { name: "Lipisha Chawla",           roll: "2K25CSUN01296", DSA: 89, Python: 92, FOE: 87, CLA: 90 },
  { name: "Lipika",                   roll: "2K25CSUN01298", DSA: 76, Python: 80, FOE: 78, CLA: 77 },
  { name: "Naitik",                   roll: "2K25CSUN01299", DSA: 68, Python: 70, FOE: 69, CLA: 71 },
  { name: "Neeti Ojha",               roll: "2K25CSUN01302", DSA: 85, Python: 88, FOE: 84, CLA: 86 },
  { name: "Rattan Kumar",             roll: "2K25CSUN01307", DSA: 74, Python: 72, FOE: 73, CLA: 75 },
  { name: "Kartik Saini",             roll: "2K25CSUN01310", DSA: 92, Python: 90, FOE: 89, CLA: 91 },
  { name: "Tripti Rawat",             roll: "2K25CSUN01320", DSA: 81, Python: 84, FOE: 80, CLA: 83 },
  { name: "Yashika Verma",            roll: "2K25CSUN01326", DSA: 77, Python: 79, FOE: 76, CLA: 78 },
  { name: "Riya Goyal",               roll: "2K25CSUN01331", DSA: 88, Python: 85, FOE: 87, CLA: 86 },
  { name: "Kanak Kanak",              roll: "2K25CSUN01332", DSA: 69, Python: 72, FOE: 70, CLA: 68 },
  { name: "Aditya",                   roll: "2K25CSUN01341", DSA: 65, Python: 67, FOE: 66, CLA: 64 },
  { name: "Tamanna Singh",            roll: "2K25CSUN01345", DSA: 90, Python: 85, FOE: 87, CLA: 90 },
  { name: "Ippili Sriram",            roll: "2K25CSUN01347", DSA: 73, Python: 75, FOE: 72, CLA: 74 },
  { name: "Ashish",                   roll: "2K25CSUN01349", DSA: 66, Python: 68, FOE: 67, CLA: 69 },
  { name: "Marisetty Venkata Ram",    roll: "2K25CSUN01404", DSA: 84, Python: 82, FOE: 83, CLA: 85 },
  { name: "Pushkar Rai",              roll: "2K25CSUN01503", DSA: 79, Python: 81, FOE: 78, CLA: 80 },
  { name: "Dhruv",                    roll: "2K25CSUN01506", DSA: 71, Python: 74, FOE: 73, CLA: 72 },
  { name: "Swasti Thakur",            roll: "2K25CSUN01508", DSA: 87, Python: 89, FOE: 86, CLA: 88 },
  { name: "Palle Jaswanth Reddy",     roll: "2K25CSUN01511", DSA: 62, Python: 65, FOE: 63, CLA: 61 },
  { name: "Kanan Satija",             roll: "2K25CSUN01512", DSA: 90, Python: 88, FOE: 89, CLA: 91 },
  { name: "Gauri",                    roll: "2K25CSUN01513", DSA: 83, Python: 85, FOE: 82, CLA: 84 },
  { name: "Prince Saini",             roll: "2K25CSUN01516", DSA: 70, Python: 72, FOE: 71, CLA: 69 },
  { name: "K. Eswar Kumar",           roll: "2K25CSUN01519", DSA: 68, Python: 70, FOE: 67, CLA: 66 },
  { name: "Rohit Gusain",             roll: "2K25CSUN01520", DSA: 75, Python: 77, FOE: 74, CLA: 76 },
  { name: "Ojal Sharma",              roll: "2K25CSUN01524", DSA: 86, Python: 88, FOE: 85, CLA: 87 },
  { name: "Krish Kumar",              roll: "2K25CSUN01530", DSA: 72, Python: 74, FOE: 73, CLA: 71 },
  { name: "Kangna Chauhan",           roll: "2K25CSUN01531", DSA: 89, Python: 91, FOE: 88, CLA: 90 },
  { name: "Utkarsh Rawat",            roll: "2K25CSUN01532", DSA: 76, Python: 78, FOE: 75, CLA: 77 },
  { name: "Ramani Raj",               roll: "2K25CSUN01533", DSA: 64, Python: 66, FOE: 65, CLA: 63 },
  { name: "Palak Verma",              roll: "2K25CSUN01537", DSA: 82, Python: 84, FOE: 83, CLA: 81 },
  { name: "Sai Charan",               roll: "2K25CSUN01541", DSA: 67, Python: 69, FOE: 68, CLA: 70 },
  { name: "Prince Sharma",            roll: "2K25CSUN01542", DSA: 73, Python: 75, FOE: 74, CLA: 72 },
  { name: "Pratham Saini",            roll: "2K25CSUN01543", DSA: 85, Python: 87, FOE: 84, CLA: 86 },
  { name: "Nikhil Chandela",          roll: "2K25CSUN01544", DSA: 78, Python: 80, FOE: 79, CLA: 77 },
  { name: "Kanak",                    roll: "2K25CSUN01545", DSA: 69, Python: 71, FOE: 70, CLA: 68 },
  { name: "Ansh Gupta",               roll: "2K25CSUN01546", DSA: 88, Python: 90, FOE: 87, CLA: 89 },
  { name: "Shauryamaan Sachdeva",     roll: "2K25CSUN01547", DSA: 74, Python: 76, FOE: 75, CLA: 73 },
  { name: "Prince Jadon",             roll: "2K25CSUN01548", DSA: 66, Python: 68, FOE: 67, CLA: 65 },
  { name: "Shivam Singh",             roll: "2K25CSUN01549", DSA: 80, Python: 82, FOE: 81, CLA: 79 },
].map(processStudent);


// ---- Grade from percentage ----
function calculateGrade(percentage) {
  if (percentage >= 80) return "A";
  if (percentage >= 60) return "B";
  if (percentage >= 40) return "C";
  return "Fail";
}


// ---- Add total, percentage, grade to a student ----
function processStudent(student) {
  let total = 0;
  for (const sub of SUBJECTS) total += Number(student[sub]);
  const percentage = Math.round((total / (SUBJECTS.length * 100)) * 10000) / 100;
  return { ...student, total, percentage, grade: calculateGrade(percentage) };
}


// ---- Topper ----
function findTopper(students) {
  let topper = students[0];
  for (const s of students) {
    if (s.total > topper.total) topper = s;
  }
  return topper;
}


// ---- Averages ----
function findAverage(students) {
  let sum = 0;
  for (const s of students) sum += s.percentage;
  const overall = Math.round((sum / students.length) * 100) / 100;

  const subjects = {};
  for (const sub of SUBJECTS) {
    let subSum = 0;
    for (const s of students) subSum += Number(s[sub]);
    subjects[sub] = Math.round((subSum / students.length) * 100) / 100;
  }
  return { overall, subjects };
}


// ---- Render table ----
function renderTable(students) {
  const tbody = document.getElementById("table-body");
  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" class="empty">No students yet.</td></tr>`;
    return;
  }
  tbody.innerHTML = students.map(s => `
    <tr>
      <td>${s.roll}</td>
      <td>${s.name}</td>
      <td>${s.DSA}</td>
      <td>${s.Python}</td>
      <td>${s.FOE}</td>
      <td>${s.CLA}</td>
      <td><strong>${s.total}</strong></td>
      <td>${s.percentage}%</td>
      <td><span class="badge badge-${s.grade}">${s.grade}</span></td>
      <td>
        <button class="btn-edit" onclick="startEdit('${s.roll}')">Edit</button>
        <button class="btn-delete" onclick="deleteStudent('${s.roll}')">Delete</button>
      </td>
    </tr>
  `).join("");
}


// ---- Render topper ----
function renderTopper(students) {
  const box = document.getElementById("topper-box");
  if (!students.length) { box.textContent = "No data."; return; }
  const t = findTopper(students);
  box.innerHTML = `
    <p><span class="big">${t.name}</span></p>
    <p>Roll: ${t.roll}</p>
    <p>Total: <span class="big">${t.total} / ${SUBJECTS.length * 100}</span></p>
    <p>Percentage: <span class="big">${t.percentage}%</span></p>
    <p>Grade: <span class="badge badge-${t.grade}">${t.grade}</span></p>
  `;
}


// ---- Render average ----
function renderAverage(students) {
  const box = document.getElementById("average-box");
  if (!students.length) { box.textContent = "No data."; return; }
  const avg = findAverage(students);
  const subRows = SUBJECTS.map(sub =>
    `<p>${sub}: <strong>${avg.subjects[sub]}</strong></p>`
  ).join("");
  box.innerHTML = `
    <p>Overall: <span class="big">${avg.overall}%</span></p>
    <hr style="margin:0.5rem 0;border-color:#eee"/>
    ${subRows}
  `;
}


// ---- Refresh all UI ----
function refreshUI() {
  renderTable(allStudents);
  renderTopper(allStudents);
  renderAverage(allStudents);
}


// ---- Delete a student by roll number ----
function deleteStudent(roll) {
  if (!confirm(`Delete student with roll number ${roll}?`)) return;
  allStudents = allStudents.filter(s => s.roll !== roll);
  refreshUI();
}


// ---- Track which student is being edited (null = add mode) ----
let editingRoll = null;

// ---- Populate form with student data for editing ----
function startEdit(roll) {
  const student = allStudents.find(s => s.roll === roll);
  if (!student) return;

  editingRoll = roll;

  // Fill form fields
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("roll").disabled = true; // roll number shouldn't change
  for (const sub of SUBJECTS) {
    document.getElementById(sub).value = student[sub];
  }

  // Update form UI to show edit mode
  document.getElementById("form-title").textContent = `Editing: ${student.name}`;
  document.getElementById("submit-btn").textContent = "Save Changes";
  document.getElementById("cancel-btn").classList.remove("hidden");

  // Scroll to form
  document.getElementById("student-form").scrollIntoView({ behavior: "smooth" });
}

// ---- Cancel edit and reset form ----
function cancelEdit() {
  editingRoll = null;
  document.getElementById("student-form").reset();
  document.getElementById("roll").disabled = false;
  document.getElementById("form-title").textContent = "Add Student";
  document.getElementById("submit-btn").textContent = "Add Student";
  document.getElementById("cancel-btn").classList.add("hidden");
  document.getElementById("error-msg").classList.add("hidden");
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}


// ---- Form: add or update student ----
document.getElementById("student-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const errorBox = document.getElementById("error-msg");
  errorBox.classList.add("hidden");
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  let hasError = false;

  if (!name) { document.getElementById("name").classList.add("invalid"); hasError = true; }
  if (!roll)  { document.getElementById("roll").classList.add("invalid"); hasError = true; }

  // Only check duplicate roll when adding (not editing)
  if (!editingRoll && roll && allStudents.some(s => s.roll === roll)) {
    errorBox.textContent = `Roll number "${roll}" already exists.`;
    errorBox.classList.remove("hidden");
    return;
  }

  const marks = {};
  for (const sub of SUBJECTS) {
    const val = document.getElementById(sub).value.trim();
    const num = parseFloat(val);
    if (val === "" || isNaN(num) || num < 0 || num > 100) {
      document.getElementById(sub).classList.add("invalid");
      hasError = true;
    } else {
      marks[sub] = num;
    }
  }

  if (hasError) {
    errorBox.textContent = "Please fill all fields. Marks must be between 0 and 100.";
    errorBox.classList.remove("hidden");
    return;
  }

  if (editingRoll) {
    // Update existing student in place
    const idx = allStudents.findIndex(s => s.roll === editingRoll);
    allStudents[idx] = processStudent({ name, roll, ...marks });
    cancelEdit();
  } else {
    // Add new student
    allStudents.push(processStudent({ name, roll, ...marks }));
    this.reset();
  }

  refreshUI();
});


// ---- Initial render ----
refreshUI();
