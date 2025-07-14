// Typing effect for subtitle
const subtitle = document.querySelector('.hero p');
const text = "Computer Science Graduate | Developer | Testing Enthusiast | Cybersecurity & Ethical Hacking Learner | API Testing | C | Python | Postman | Kali Linux | Burp Suite";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
subtitle.textContent = "";
typeWriter();

// All sections visible immediately
const sections = document.querySelectorAll('.content-section');
sections.forEach(section => {
  section.classList.add('visible');
});

// Smooth scroll
document.querySelectorAll('nav a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
