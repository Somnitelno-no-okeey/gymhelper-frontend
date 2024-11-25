const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-month"),
prevNextIcon = document.querySelectorAll(".buttons-container button");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const eventDate = [
    {
        month: 'Ноябрь',
        day: 12,
    },
    {
        month: 'Ноябрь',
        day: 15,
    },
    {
        month: 'Ноябрь',
        day: 18,
    },
];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
              "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const renderCalendar = () => {
    let firstDayofMonth = (new Date(currYear, currMonth, 1).getDay() + 6) % 7,
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = (new Date(currYear, currMonth, lastDateofMonth).getDay() + 6) % 7,
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isEventDay = eventDate.some(event => 
            event.month === months[currMonth] && event.day === i
        ) ? "event" : "";
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "current-day" : "";
        liTag += `<li class="${isToday} ${isEventDay}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.classList.contains('prev') ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});