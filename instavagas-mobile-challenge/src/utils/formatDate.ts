interface optionsProps {
    read: boolean;
    hours?: boolean;
  }
  
  export default function formatDate(
    date: Date,
    options: optionsProps = { read: false, hours: false }
  ) {
    if (isNaN(date.getTime())) return "";
  
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    let monthFormatted = month < 10 ? "0" + month : month;
    let dayFormatted = day < 10 ? "0" + day : day;
  
    if (options.hours) {
      const hours =
        date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
      const minutes = date.getMinutes();
      return `${dayFormatted}/${monthFormatted}/${year} - ${hours}:${minutes}`;
    }
  
    if (options.read) return `${dayFormatted}/${monthFormatted}/${year}`;
  
    return `${year}-${monthFormatted}-${dayFormatted}`;
  }
  