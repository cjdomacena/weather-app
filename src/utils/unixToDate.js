function unixToDate(timestamp) {
  const date = new Date(timestamp * 1000).toLocaleString("en-gb", {
    day: "2-digit",
    month: "short",
  });
  return date;
}

export default unixToDate;
