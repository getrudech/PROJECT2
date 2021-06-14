let button = document.getElementById("btn");
let birthYear = document.getElementById("year");
let birthMonth = document.getElementById("month");
let birthDay = document.getElementById("day");
let male = document.getElementById("male");
let female = document.getElementById("female");
const form = document.querySelector(".form");
const myakan = document.querySelector(".myakan");




var akan = document.querySelector(".akan");

let mm;
let cc;
let dd;
let yy;

function calcDayOfBirth() {
  console.log(birthYear.value);

  mm = birthMonth.value;
  dd = birthDay.value;
  yearArr = birthYear.value.toString().split("");
  cc = parseInt(yearArr.slice(0, 2).join(""));
  yy = parseInt(yearArr.slice(2).join(""));
  console.log(mm);
  console.log(yy);
  console.log(dd);
  console.log(cc);

  if (birthYear >= 2000) {
    yy = 100 + parseInt(yearArr.slice(2).join(""));
  }
  let d = Math.floor(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );
  console.log(d);
  return d;
}

function getAkanName() {
  let akanMaleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  let akanFemaleName = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  let daysOfTheWeek = [
    "sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let theDay = calcDayOfBirth();

  var akanNames;

  if (daysOfTheWeek[theDay] && male.checked) {
    akanNames = akanMaleNames[theDay];
  }
  if (daysOfTheWeek[theDay] && female.checked) {
    akanNames = akanFemaleName[theDay];
    console.log(daysOfTheWeek[theDay]);
  }

  akan.innerHTML = akanNames;
}

button.addEventListener("click", () => {
  if (
    year === null ||
    year < 1 ||
    month === null ||
    month > 12 ||
    month < 1 ||
    day === null ||
    day > 31 ||
    day < 1
  ) {
    alert("please enter your correct birth info");
  } else {
    getAkanName();
    form.style.display = "none";
    myakan.style.display = "block";
  }
});
