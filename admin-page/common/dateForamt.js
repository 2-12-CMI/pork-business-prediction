const up = (num) => (num <= 9 ? `0${num}` : num);

const dateFormat = (strDate) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}.${up(date.getMonth() + 1)}.${up(
    date.getDate(),
  )}`;
};

export default dateFormat;
