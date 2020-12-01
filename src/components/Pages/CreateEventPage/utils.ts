export const addTimeToDate = (date: string, time: string) => {
  const dateD = new Date(date);
  const timeD = new Date(time);
  const year = dateD.getFullYear();
  const month = dateD.getMonth();
  const day = dateD.getDate();
  const hours = timeD.getHours();
  const minutes = timeD.getMinutes();
  const newDate = new Date(year, month, day, hours, minutes, 0);
  return newDate.toISOString();
};

export const getUtcDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return new Date(Date.UTC(year, month, day, hours, minutes, 0));
};
