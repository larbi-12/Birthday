 fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // دابا الروابط ولات موجودة، نطبق الكود عليهم
      const links = document.querySelectorAll('.nav-links a');
      const currentPath = window.location.pathname;

      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }

        link.addEventListener('click', function () {
          links.forEach(lnk => lnk.classList.remove('active'));
          this.classList.add('active');
        });
      });
    });