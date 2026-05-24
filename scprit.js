const total = 8;
let cur = 1;
const slides = document.querySelectorAll(".slide");

function go(d) {
  const n = cur + d;
  if (n < 1 || n > total) return;
  slides[cur - 1].classList.remove("active");
  cur = n;
  slides[cur - 1].classList.add("active");
  document.getElementById("counter").textContent = cur + " / " + total;
  document.getElementById("prev").disabled = cur === 1;
  document.getElementById("next").disabled = cur === total;
  document.getElementById("bar").style.width = (cur / total) * 100 + "%";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
});

document.getElementById("bar").style.width = (1 / total) * 100 + "%";
