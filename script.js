"use strict";

const reportData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const eachTimeFrame = document.querySelectorAll(".time-frame");
// eachTimeFrame.forEach((fr) => (fr.style.color = "#fff"));
const dailyReport = document.querySelector(".daily");
const weeklyReport = document.querySelector(".weekly");
const monthlyReport = document.querySelector(".monthly");

const curTimeFrame = document.querySelectorAll(".current-period-time-spent");
const preTimeFrame = document.querySelectorAll(".last-period-time-spent");
const lastTimeFrame = document.querySelectorAll(".last-time-frame");

const curDays = reportData.map((data) => data.timeframes.daily.current);
const preDays = reportData.map((data) => data.timeframes.daily.previous);
const curWeek = reportData.map((data) => data.timeframes.weekly.current);
const lastWeek = reportData.map((data) => data.timeframes.weekly.previous);
const curMonth = reportData.map((data) => data.timeframes.monthly.current);
const lastMonth = reportData.map((data) => data.timeframes.monthly.previous);

function Timeframes(currentPeriod, previousPeriod, timeframe) {
  currentPeriod.flatMap(function (cur, i) {
    curTimeFrame[i].textContent = cur;
  });
  previousPeriod.map((pre, i) => (preTimeFrame[i].textContent = pre));
  lastTimeFrame.forEach((frame) => (frame.textContent = `${timeframe}`));
}

Timeframes(curDays, preDays, "Yesterday");

dailyReport.addEventListener("click", function () {
  Timeframes(curDays, preDays, "Yesterday");
});
weeklyReport.addEventListener("click", function () {
  Timeframes(curWeek, lastWeek, "Last Week");
});
monthlyReport.addEventListener("click", function () {
  Timeframes(curMonth, lastMonth, "Last Month");
});

eachTimeFrame.forEach(function (fr) {
  fr.addEventListener("click", function (e) {
    eachTimeFrame.forEach(
      (frame) => (frame.style.color = "hsl(235, 45%, 61%)")
    );
    fr.style.color = "white";
  });
});
