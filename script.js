
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.style.display = i === index ? "block" : "none");
  if (index === slides.length - 1) {
    setTimeout(() => document.getElementById("interactive-buttons").style.display = "block", 2000);
  }
}

function checkAccess() {
  const input = document.getElementById("anniversary").value.trim().toLowerCase();
  if (input === "1st may 2023") {
    document.getElementById("access-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("bg-music").volume = 0.5;
    showSlide(current);
    autoAdvance();
  } else {
    document.getElementById("error-msg").innerText = "Hmm… that’s not it. Try again, my love.";
  }
}

function autoAdvance() {
  setInterval(() => {
    if (current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  }, 5000);
}

function restart() {
  location.reload();
}

function requestAnother() {
  window.location.href = "mailto:farhaan270300@gmail.com?subject=Another Tribute Request 💌&body=Tell me why you want another tribute, or share how this one made you feel.";
}

function end() {
  document.getElementById("main-content").innerHTML = "<p style='font-size:24px;margin-top:20%'>Thank you for watching, my love. 💫</p>";
}
