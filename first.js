let showDateTime = () => {
  let today = new Date();
  let Hours = today.getHours();
  let Minutes = today.getMinutes();
  let Second = today.getSeconds();
  let monthName = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octber",
    "November",
    "December",
  ];

  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day_night = "AM";
  let S = document.querySelector(".text1");
  let P = document.querySelector(".text2");
  if (Hours > 12) {
    Hours = Hours % 12;
    day_night = "PM";
  }
  if (Hours < 10) {
    Hours = "0" + Hours;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (Second < 10) {
    Second = "0" + Second;
  }
  S.innerText = Hours + ":" + Minutes + ":" + Second + " " + day_night;
  P.innerText =
    dayName[today.getDay()] +
    ", " +
    today.getDate() +
    " " +
    monthName[today.getMonth()] +
    " " +
    today.getFullYear();
};
startTimer = () => {
  setInterval(showDateTime, 1000);
};
startTimer();
