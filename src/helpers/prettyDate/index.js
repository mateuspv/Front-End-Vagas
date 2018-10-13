//
// Ref: https://johnresig.com/blog/javascript-pretty-date/
//
export default function prettyDate(date, fromTime) {
  const now = fromTime ? fromTime : (new Date())
  const diff = ((now.getTime() - date.getTime()) / 1000);
  const dayDiff = Math.floor(diff / 86400);

  if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31)
    return;

  if (dayDiff === 0 && diff < 60) {
    return "agora";
  }

  if (diff < 120) {
    return "1 minuto atrás"
  }

  if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minutos atrás`
  }

  if (diff < 7200) {
    return "1 hora atrás";
  }

  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} horas atrás`
  }

  if (dayDiff === 1) {
    return "Ontem"
  }

  if (dayDiff < 7) {
    return `${dayDiff} dias atrás`
  }

  if (dayDiff < 31) {
    const weeks = Math.ceil(dayDiff / 7);
    return `${weeks} semanas atrás`;
  }
}