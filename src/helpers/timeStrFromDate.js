import i18n from '../i18n';

export default function (date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  const daysDiff = Math.floor(diff / 86400);

  if (diff < 60) {
    return i18n.date.now;
  }

  if (diff <= 3540) {
    const minutes = diff.toString().substring(0, 2);
    return i18n.date.minutes.replace('$', minutes);
  }

  if (diff <= 5400) {
    return i18n.date.oneHour;
  }

  if (diff <= 86400) {
    const hours = Math.round(diff / 3600);
    return i18n.date.hours.replace('$', hours);
  }

  if (daysDiff === 1) {
    return i18n.date.yesterday;
  }

  if (diff < 7) {
    return i18n.date.days.replace('$', daysDiff);
  }

  if (diff <= 777600) {
    return i18n.date.week;
  }

  const weeks = Math.floor(daysDiff / 7);

  return i18n.date.weeks.replace('$', weeks);
}