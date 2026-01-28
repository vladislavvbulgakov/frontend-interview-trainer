const MONTHS = [
   "Янв",
   "Фев",
   "Мар",
   "Апр",
   "Май",
   "Июн",
   "Июл",
   "Авг",
   "Сен",
   "Окт",
   "Ноя",
   "Дек"
];

export function displayDate(dateString, withTime = false) {
   const date = new Date(dateString);

   if (Number.isNaN(date.getTime())) {
      return "";
   }

   const day = date.getDate();
   const month = MONTHS[date.getMonth()];
   const year = date.getFullYear();

   if (!withTime) {
      return `${day} ${month}, ${year}`;
   }

   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");

   return `${hours}:${minutes} ${day} ${month}, ${year}`;
}
