document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [headerRes, footerRes] = await Promise.all([
      fetch("header.html?v=" + Date.now()),
      fetch("footer.html?v=" + Date.now())
    ]);

    if (!headerRes.ok || !footerRes.ok) throw new Error("Không tìm thấy file layout");

    const headerHTML = await headerRes.text();
    const footerHTML = await footerRes.text();

    document.getElementById("header").innerHTML = headerHTML;
    document.getElementById("footer").innerHTML = footerHTML;

    // Gắn lại event toggle menu
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        toggle.classList.toggle("active");
      });
    }
  } catch (err) {
    console.error("❌ Lỗi load header/footer:", err);
  }
});
