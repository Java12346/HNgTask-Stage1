setInterval(() => {
  const utcTimeElement = document.getElementById('utcTime');
  const currentUTCTime = new Date().getTime();
  utcTimeElement.textContent = currentUTCTime;
}, 1000);