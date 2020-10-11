const up = (num) => (num <= 9 ? `0${num}` : num);

const dateFormat = (strDate, div = ".") => {
  const date = new Date(strDate);
  return `${date.getFullYear()}${div}${up(date.getMonth() + 1)}${div}${up(
    date.getDate(),
  )}`;
};

export default dateFormat;
