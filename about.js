// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Welcome - Animation
document.addEventListener("DOMContentLoaded", () => {
  const upElements = document.querySelectorAll(".welcome .up");
  const downElements = document.querySelectorAll(".welcome .down");

  const observerOptions = {
    threshold: 0.10, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("up")) {
          entry.target.classList.add("animate-up");
        } else if (entry.target.classList.contains("down")) {
          entry.target.classList.add("animate-down");
        }
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  [...upElements, ...downElements].forEach((el) => observer.observe(el));
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Image Section - Animation
document.addEventListener("DOMContentLoaded", () => {
  const rightElements = document.querySelectorAll(".image-section .up");
  const leftElements = document.querySelectorAll(".image-section .down");

  const observerOptions = {
    threshold: 0.10, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("up")) {
          entry.target.classList.add("animate-up");
        } else if (entry.target.classList.contains("down")) {
          entry.target.classList.add("animate-down");
        }
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  [...rightElements, ...leftElements].forEach((el) => observer.observe(el));
});
