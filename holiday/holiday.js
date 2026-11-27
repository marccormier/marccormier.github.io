const holidays = [
      {
        name: "TEST",
        start: new Date("2026-11-22T15:08:00"),
        end: new Date("2026-11-22T15:08:30"),
        className: "test-theme",
        secondClass: "test-banner"
      },
      {
        name: "NewYear",
        start: new Date("2026-12-31T00:00:00"),
        end: new Date("2026-12-31T23:59:59"),
        className: "newYear-theme",
        secondClass: "newYear-banner"
      },
      {
        name: "saintValentin",
        start: new Date("2027-02-14T00:00:00"),
        end: new Date("2027-02-14T23:59:59"),
        className: "saintValentin-theme",
        secondClass: ""
      },
      {
        name: "vendrediSaint",
        start: new Date("2027-03-26T00:00:00"),
        end: new Date("2027-03-26T23:59:59"),
        className: "vendrediSaint-theme",
        secondClass: ""
      },
      {
        name: "paques",
        start: new Date("2027-03-28T00:00:00"),
        end: new Date("2027-03-28T23:59:59"),
        className: "paques-theme",
        secondClass: "paques-banner"
      },
      {
        name: "lundiPaque",
        start: new Date("2027-03-29T00:00:00"),
        end: new Date("2027-03-29T23:59:59"),
        className: "lundiPaque-theme",
        secondClass: ""
      },
      {
        name: "reinePatriote",
        start: new Date("2027-05-24T00:00:00"),
        end: new Date("2027-05-24T23:59:59"),
        className: "patriotsDay-theme",
        secondClass: "patriotsDay-banner"
      },
      {
        name: "stJeanBaptiste",
        start: new Date("2027-06-24T00:00:00"),
        end: new Date("2027-06-24T23:59:59"),
        className: "stJeanBaptiste-theme",
        secondClass: ""
      },
      {
        name: "CanadaDay",
        start: new Date("2027-07-01T00:00:00"),
        end: new Date("2027-07-01T23:59:59"),
        className: "CanadaDay-theme",
        secondClass: ""
      },
      {
        name: "travail",
        start: new Date("2027-09-06T00:00:00"),
        end: new Date("2027-09-06T23:59:59"),
        className: "travail-theme",
        secondClass: "travail-banner"
      },
      {
        name: "actionGrace",
        start: new Date("2027-10-11T00:00:00"),
        end: new Date("2027-10-11T23:59:59"),
        className: "actionGrace-theme",
        secondClass: "actionGrace-banner"
      },
      {
        name: "Halloween",
        start: new Date("2027-10-31T00:00:00"),
        end: new Date("2027-10-31T23:59:59"),
        className: "halloween-theme",
        secondClass: ""
      },
      {
        name: "jourSouvenir",
        start: new Date("2027-11-11T00:00:00"),
        end: new Date("2027-11-11T23:59:59"),
        className: "jourSouvenir-theme",
        secondClass: "jourSouvenir-banner"
      },
      {
        name: "Christmas",
        start: new Date("2026-12-25T00:00:00"),
        end: new Date("2026-12-25T23:59:59"),
        className: "christmas-theme",
        secondClass: "christmas-banner"
      }
    ];
function holidayCheckTime() {
  const now = new Date();
  const h1Elm = document.getElementById("h1");
  const marqueeElm = document.getElementById("marquee");
  const navElm = document.getElementById("nav");
  const mainElm = document.getElementById("content");
  const h2Elm = document.getElementsByTagName("h2");
  const footerElm = document.getElementById("footer");
  holidays.forEach(holiday => {
    if (now >= holiday.start && now <= holiday.end) {
      h1Elm.setAttribute("class", holiday.className);
      marqueeElm.setAttribute("class", holiday.className);
      navElm.setAttribute("class", holiday.className);
      mainElm.setAttribute("class", holiday.secondClass);
      h2Elm.setAttribute("class", holiday.secondClass);
      footerElm.setAttribute("class", holiday.secondClass);
//      Elm.classList.add("", "");
      clearInterval(holidayCheckTime);
    }
    else if (now > holiday.end) {
      h1Elm.removeAttribute("class", holiday.className);
      marqueeElm.removeAttribute("class", holiday.className);
      navElm.removeAttribute("class", holiday.className);
      mainElm.removeAttribute("class", holiday.secondClass);
      h2Elm.removeAttribute("class", holiday.secondClass);
      footerElm.removeAttribute("class", holiday.secondClass);
//    Elm.classList.remove("", "");
      clearInterval(holidayCheckTime);
    }
  });}
document.addEventListener('DOMContentLoaded', () => {
setInterval(holidayCheckTime, 1000);
});