import dayjs from 'dayjs';

export const formatDate = (date: Date, format = 'YYYY/MM/DD HH:mm:ss') => {
  if (!dayjs(date).isValid()) return '';
  return dayjs(date).format(format);
};
