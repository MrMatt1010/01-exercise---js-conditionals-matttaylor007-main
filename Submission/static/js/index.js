/**
 * NOTE!! You can ignore this code (it makes the form work)
 * Add your code to script.js
 */
import { calculateGrade, calculateStatus } from "./script.js";

const studentResults = [
  { name: "Leanora", percent: 0 },
  { name: "Kynaston", percent: 25 },
  { name: "Elijah", percent: 40 },
  { name: "Ezekiel", percent: 43 },
  { name: "Logan", percent: 49 },
  { name: "Piers", percent: 49 },
  { name: "Nyree", percent: 50 },
  { name: "Lyanna", percent: 60 },
  { name: "Boniface", percent: 64 },
  { name: "Aaliyah", percent: 65 },
  { name: "Wilhelmina", percent: 70 },
  { name: "Roxanna", percent: 79 },
  { name: "Margaret", percent: 80 },
  { name: "Shelagh", percent: 91 },
  { name: "Brenna", percent: 100 },
];

const studentGrades = studentResults.map((student) => ({
  ...student,
  grade: calculateGrade(student.percent),
}));

const passIcon = `
  <svg class="text-success" width="32" height="32" fill="currentColor">
    <use xlink:href="static/icons/bootstrap-icons.svg#check" />
  </svg>
  `;
const failIcon = `
  <svg class="text-danger" width="32" height="32" fill="currentColor">
    <use xlink:href="static/icons/bootstrap-icons.svg#x" />
  </svg>
`;
const startedIcon = `
  <svg class="text-info" width="24" height="24" fill="currentColor">
    <use xlink:href="static/icons/bootstrap-icons.svg#chat" />
  </svg>
`;
const todoIcon = `<svg class="text-dark" width="24" height="24" fill="currentColor">
    <use xlink:href="static/icons/bootstrap-icons.svg#clock" />
  </svg>
`;

const tableEl = document.getElementById("gradeTable");
tableEl.innerHTML = studentGrades
  .map(
    ({ name, percent, grade }) => `
    <tr>
      <td>${name}</td>
      <td>${percent}%</td>
      <td>${grade}</td>
    </tr>
`
  )
  .join("");

const items = [
  {
    name: "Floors sweeped",
    status: "pass",
    comments: [],
  },
  {
    name: "Debris cleared",
    status: "fail",
    comments: ["Metal filings still on the floor"],
  },
  {
    name: "Measurements correct",
    comments: [],
  },
  {
    name: "Final sign off",
    comments: ["Called Gary, waiting to hear back"],
  },
];

const itemStatuses = items.map((item) => ({
  ...item,
  status: calculateStatus(item.status, item.comments),
}));

const checklistEl = document.getElementById("checklistTable");
checklistEl.innerHTML = itemStatuses
  .map(({ name, status, comments }) => {
    let icon = "";
    if (status === "pass") {
      icon = passIcon;
    }
    if (status === "fail") {
      icon = failIcon;
    }
    if (status === "started") {
      icon = startedIcon;
    }
    if (status === "todo") {
      icon = todoIcon;
    }

    return `
    <tr>
      <td>${icon}</td>
      <td>${
        (status && status.charAt(0).toUpperCase() + status.slice(1)) || ""
      }</td>
      <td>${name}</td>
      <td>${comments}</td>
    </tr>
`;
  })
  .join("");
