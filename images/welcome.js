
document.addEventListener("DOMContentLoaded", () => {
  // نجيب جميع الصفحات
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  // نظهر الصفحة الأولى
  pages[currentPage].classList.add("active");

  // نجيب جميع الأزرار اللي فيهم class btn
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // نخفي الصفحة الحالية
      pages[currentPage].classList.remove("active");

      // ننتقل للصفحة التالية
      currentPage++;

      // إذا كاينة صفحة بعد
      if (currentPage < pages.length) {
        pages[currentPage].classList.add("active");
      }
    });
  });
});
