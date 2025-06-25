document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    { text: "Slide 1 content", image: "slide1.png" },
    { text: "Slide 2 content", image: "slide2.png" },
    { text: "Slide 3 content", image: "slide3.png" },
    { text: "Slide 4 content", image: "slide4.png" },
    { text: "Slide 5 content", image: "slide5.png" },
    { text: "Slide 6 content", image: "slide6.jpeg" },
    { text: "Even if my future is only built on your memories… it will still be worth everything.\n— FN27 lies in my heart forever. I love you❤️", image: "slide7.jpeg" }
  ];

  const container = document.getElementById("slides");
  let index = 0;

  function showSlide() {
    const { text, image } = slides[index];
    container.style.backgroundImage = `url('${image}')`;
    container.innerText = text;
    index++;
    if (index < slides.length) {
      setTimeout(showSlide, 4000);
    } else {
      container.innerHTML = `<div>${text}</div><br><button onclick="location.reload()">Restart</button>`;
    }
  }

  showSlide();
});