(() => {
  const deck = document.getElementById("deck");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const navLeft = document.getElementById("nav-left");
  const navRight = document.getElementById("nav-right");

  let i = 0;
  const total = slides.length;

  const params = new URLSearchParams(location.search);
  const fromParam = parseInt(params.get("s") || location.hash.replace("#", ""), 10);
  if (!isNaN(fromParam) && fromParam >= 1 && fromParam <= total) i = fromParam - 1;

  function render() {
    deck.style.transform = `translateX(-${i * 100}vw)`;
    history.replaceState(null, "", `#${i + 1}`);
    if (navLeft) navLeft.style.display = i > 0 ? '' : 'none';
    if (navRight) navRight.style.display = i < total - 1 ? '' : 'none';
  }

  function go(n) {
    i = Math.max(0, Math.min(total - 1, n));
    render();
  }

  if (navLeft) navLeft.addEventListener("click", () => go(i - 1));
  if (navRight) navRight.addEventListener("click", () => go(i + 1));

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;

    switch (e.key) {
      case "ArrowRight":
      case " ":
      case "PageDown":
      case "j":
        e.preventDefault();
        go(i + 1);
        break;
      case "ArrowLeft":
      case "PageUp":
      case "k":
        e.preventDefault();
        go(i - 1);
        break;
      case "Home":
        go(0);
        break;
      case "End":
        go(total - 1);
        break;
      default:
        if (/^[1-9]$/.test(e.key)) go(parseInt(e.key, 10) - 1);
    }
  });

  let tx = 0;
  document.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
  });

  render();
})();
