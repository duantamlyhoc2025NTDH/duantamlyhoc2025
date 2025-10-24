document.addEventListener("DOMContentLoaded", () => {
  async function loadLayout() {
    try {
      const [headerRes, footerRes] = await Promise.all([
        fetch("/duantamlyhoc2025/header.html"),
        fetch("/duantamlyhoc2025/footer.html")
      ]);
      if (!headerRes.ok || !footerRes.ok) throw new Error("Không tìm thấy layout");

      const headerHTML = await headerRes.text();
      const footerHTML = await footerRes.text();

      const headerEl = document.getElementById("header");
      const footerEl = document.getElementById("footer");
      if (headerEl) headerEl.innerHTML = headerHTML;
      if (footerEl) footerEl.innerHTML = footerHTML;

      const toggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".navbar ul");
      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("show");
          toggle.classList.toggle("active");
        });
      }

      const dropdown = document.querySelector(".dropdown > a");
      const dropdownContent = document.querySelector(".dropdown-content");
      if (dropdown && dropdownContent) {
        dropdown.addEventListener("click", (e) => {
          e.preventDefault();
          dropdownContent.classList.toggle("show");
        });
      }
    } catch (err) {
      console.error("❌ Lỗi khi load header/footer:", err);
    }
  }
  loadLayout();
});
