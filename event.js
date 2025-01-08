// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Upcoming Events - Animation
document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".content-wrapper .content-container .up");
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'show' class to the element
          targetElement.classList.add("show");

          // Unobserve after triggering to ensure it only happens once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe the target element
  observer.observe(targetElement);
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Events Section - Animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.content-wrapper .content-container .row .card').forEach((item) => {
    observer.observe(item);
  })
});