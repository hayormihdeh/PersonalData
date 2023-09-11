const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Get the current date
const currentDate = new Date();

// Get the current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

// Get the current UTC time in milliseconds
const currentUTCTime = currentDate.getTime();

// Set the text content of the elements
currentDayOfTheWeekElement.textContent = currentDayOfWeek;
currentUTCTimeElement.textContent = currentUTCTime;