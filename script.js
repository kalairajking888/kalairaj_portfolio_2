// Hero subtitle typing effect
const subtitle = document.querySelector('.hero p');
const text = "Software Tester | Cybersecurity Learner | Ethical Hacker in Progress";
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

// Reveal sections on scroll
const sections = document.querySelectorAll('.content-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

// sections.forEach(section => {
//   section.style.opacity = 0;
//   section.style.transform = 'translateY(40px)';
//   observer.observe(section);
// });

sections.forEach(section => {
  observer.observe(section);
});


// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to top button logic
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.title = "Go to top";
scrollBtn.textContent = "↑";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  background-color: #0ff;
  color: #000;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: none;
  box-shadow: 0 0 12px #0ff;
`;

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
