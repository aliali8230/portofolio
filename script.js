// Tidak ada JavaScript khusus yang dibutuhkan
// Jika kamu ingin efek scroll smooth, tambahkan ini:

document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");
  const text = "Hi, I'm Aliza.";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
setTimeout(() => {
  typingElement.classList.add("done");
}, 1300); // pas ngetik selesai

