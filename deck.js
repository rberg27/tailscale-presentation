(() => {
  const deck = document.getElementById("deck");
  const slides = Array.from(document.querySelectorAll(".slide"));

  let i = 0;
  const total = slides.length;

  const params = new URLSearchParams(location.search);
  const fromParam = parseInt(params.get("s") || location.hash.replace("#", ""), 10);
  if (!isNaN(fromParam) && fromParam >= 1 && fromParam <= total) i = fromParam - 1;

  // Create nav arrows
  const leftArrow = document.createElement("button");
  leftArrow.className = "nav-arrow nav-left";
  leftArrow.innerHTML = "&#8249;";
  leftArrow.addEventListener("click", () => go(i - 1));
  document.body.appendChild(leftArrow);

  const rightArrow = document.createElement("button");
  rightArrow.className = "nav-arrow nav-right";
  rightArrow.innerHTML = "&#8250;";
  rightArrow.addEventListener("click", () => go(i + 1));
  document.body.appendChild(rightArrow);

  function render() {
    deck.style.transform = `translateX(-${i * 100}vw)`;
    history.replaceState(null, "", `#${i + 1}`);
    leftArrow.style.display = i > 0 ? "" : "none";
    rightArrow.style.display = i < total - 1 ? "" : "none";
  }

  function go(n) {
    i = Math.max(0, Math.min(total - 1, n));
    render();
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;

    // Don't navigate if modal is open
    const modal = document.getElementById("modal");
    if (modal && !modal.classList.contains("hidden")) {
      if (e.key === "Escape") modal.classList.add("hidden");
      return;
    }

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
