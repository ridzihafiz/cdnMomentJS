// import cloud code
window.moment = moment;

setInterval(() => {
  let dateNow = moment().format('DD/MM/YYYY hh:mm:ss a');

  // tangkap element small
  let time = document.getElementById('time');

  time.innerHTML = dateNow;
});
