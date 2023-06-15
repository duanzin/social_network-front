function TimePassed({ dateTime }) {
  const elapsedMilliseconds = Date.now() - new Date(dateTime).getTime();

  let timePassed;

  if (elapsedMilliseconds < 1000) {
    timePassed = "Just now";
  } else if (elapsedMilliseconds < 60000) {
    const seconds = Math.floor(elapsedMilliseconds / 1000);
    timePassed = `${seconds}sec`;
  } else if (elapsedMilliseconds < 3600000) {
    const minutes = Math.floor(elapsedMilliseconds / 60000);
    timePassed = `${minutes}min`;
  } else if (elapsedMilliseconds < 86400000) {
    const hours = Math.floor(elapsedMilliseconds / 3600000);
    timePassed = `${hours}h`;
  } else if (elapsedMilliseconds < 604800000) {
    const days = Math.floor(elapsedMilliseconds / 86400000);
    timePassed = `${days}d`;
  } else {
    const date = new Date(dateTime);
    timePassed = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  }

  return (
    <span className="text-base text-[#5B7083] font-medium">{timePassed}</span>
  );
}

export default TimePassed;
