// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// GALLERY IN VIEW

// Get all the images inside the gallery
const galleryImages = document.querySelectorAll(".gallery-container  img");

// Get the lightbox and lightbox image elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox .close");

// Add event listener to each image in the gallery
galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    // Set the clicked image source to the lightbox image
    lightboxImage.src = e.target.src;
    // Display the lightbox
    lightbox.style.display = "flex";
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close the lightbox if the user clicks anywhere outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ABOUT US
document.addEventListener("DOMContentLoaded", () => {
  const aboutWrapper = document.querySelector(".about-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutWrapper.classList.add("animate");
        observer.unobserve(aboutWrapper); // Stop observing after animation triggers
      }
    });
  });

  observer.observe(aboutWrapper);
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// MENU
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

  document.querySelectorAll(".menu-wrapper .card").forEach((card) => {
    observer.observe(card);
  });
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Event
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".event-wrapper .row .e-zoom");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation triggers
      }
    });
  });

  zoomElements.forEach((element) => {
    observer.observe(element);
  });
});
