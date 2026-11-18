import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isToday);
dayjs.extend(relativeTime);

export function formatDate(date: Date, format: string): string {
  if (!dayjs(date).isValid()) {
    throw new Error('Invalid date provided');
  }
  return dayjs(date).format(format);
}

export function isDateToday(date: Date): boolean {
  return dayjs(date).isToday();
}

export function convertRelativeDate(date: Date): string {
  const now = dayjs();
  const dateObj = dayjs(date);

  if (isDateToday(date)) {
    return `Today at ${formatDate(date, 'HH:mm A')}`;
  }

  if (now.subtract(1, 'day').isSame(dateObj, 'day')) {
    return `Yesterday at ${formatDate(date, 'HH:mm A')}`;
  }

  if (dateObj.isAfter(now.subtract(7, 'day'))) {
    return `${dateObj.fromNow()} at ${formatDate(date, 'HH:mm A')}`;
  }

  return `${formatDate(date, 'MMM DD, YYYY')} at ${formatDate(date, 'HH:mm A')}`;
}
