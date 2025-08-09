document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("SITE_HEADER");

  header.style.transition = "opacity 0.3s ease";

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
    } else {
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
    }
  });
});
