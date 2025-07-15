export function formatDateTime(date: Date, showTime = false) {
  const formatter = showTime
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });

  return formatter.format(date);
}

export function formatPostDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "2-digit",
  });

  return formatter.format(new Date(date));
}
