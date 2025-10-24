// ===== LOAD HEADER + FOOTER CHỈ 1 LẦN =====
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // ✅ Sau khi header được load xong, gắn sự kiện menu toggle
      const toggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".navbar ul");

      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("show");
          toggle.classList.toggle("active");
        });
      }

      // ✅ Dropdown cấp 2 (TLH)
      const dropdown = document.querySelector(".dropdown > a");
      const dropdownContent = document.querySelector(".dropdown-content");
      if (dropdown && dropdownContent) {
        dropdown.addEventListener("click", (e) => {
          e.preventDefault();
          dropdownContent.classList.toggle("show");
        });
      }
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});
