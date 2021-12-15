export const formatTime = (timeInMs) => {
  var hour = (new Date(parseInt(timeInMs + '000'))).getHours();
  if (hour < 10)
    hour = '0' + hour;
  return `${hour}:00`;
}

export const getDayName = (timeInMs, index, strings) => {
  if (index === 0)
    return strings.today;

  var day = (new Date(parseInt(timeInMs + '000'))).getDay();
  switch (day) {
    case 0:
      return strings.sunday;
    case 1:
      return strings.monday;
    case 2:
      return strings.tuesday;
    case 3:
      return strings.wednesday;
    case 4:
      return strings.thursday;
    case 5:
      return strings.friday;
    case 6:
      return strings.saturday;

    default:
      return strings.sunday;
  }
}
