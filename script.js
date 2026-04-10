const cursor = document.querySelector("#cursor");

let x = 0;
let y = 0;

let cx = 0;
let cy = 0;

// mouse position
document.addEventListener("mousemove", function(e) {
  x = e.clientX;
  y = e.clientY;
});

// smooth animation
function smoothMove() {
  cx += (x - cx) * 0.1;
  cy += (y - cy) * 0.1;

  cursor.style.left = cx + "px";
  cursor.style.top = cy + "px";

  requestAnimationFrame(smoothMove);
}

smoothMove();

// hover effect
const text = document.querySelector(".text");

text.addEventListener("mouseenter", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(2)";
});

text.addEventListener("mouseleave", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});