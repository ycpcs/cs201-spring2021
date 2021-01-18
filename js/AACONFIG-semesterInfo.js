
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("02/01/2021 4:00:00"),
    lastDayOfSemester:  new Date("05/06/2021 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Spartan Day",          new Date("03/10/2021"),  new Date("03/10/2021")),
        new VacationDays("Good Friday",         new Date("04/02/2021"), new Date("04/02/2021")),
    ]
};
