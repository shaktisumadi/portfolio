const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const { left, top } = spotlight.getBoundingClientRect();

  // Calculate relative cursor position inside the element
  const x = clientX - left;
  const y = clientY - top;

  spotlight.style.backgroundPosition = `${x}px ${y}px`;
});
