
let currentSlide = 1;
const totalSlides = 7;
function checkAccess() {
  const input = document.getElementById('access-input').value;
  if (input === '01/05/2023') {
    document.getElementById('access-page').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    setTimeout(nextSlide, 5000);
  } else {
    alert("Wrong date, Bebe Noor 😘");
  }
}
function nextSlide() {
  if (currentSlide < totalSlides) {
    document.getElementById('slide' + currentSlide).classList.remove('show');
    currentSlide++;
    document.getElementById('slide' + currentSlide).classList.add('show');
    setTimeout(nextSlide, 5000);
  } else {
    document.getElementById('end-screen').style.display = 'block';
  }
}
function restart() {
  location.reload();
}
function requestAnother() {
  window.location.href = "mailto:your_email@example.com?subject=Another Tribute Request&body=Hi, I'd love another one because...";
}
function end() {
  alert("Goodbye, Bebe Noor ❤️");
}
