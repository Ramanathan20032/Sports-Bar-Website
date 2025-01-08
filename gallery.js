// Viewing Image in Larger View
// Select all overlay elements inside gallery items
const galleryOverlays = document.querySelectorAll(
  ".gallery-container .gallery-item .overlay"
);

// Select the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox .close");

// Add click event listener to each overlay
galleryOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    // Find the closest gallery item and its image
    const galleryItem = overlay.closest(".gallery-item");
    const image = galleryItem.querySelector("img");

    // Set the image source to the lightbox image
    lightboxImage.src = image.src;

    // Show the lightbox
    lightbox.style.display = "flex";
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Gallery Section - Animation
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
  document.querySelectorAll('.gallery-section .gallery-item').forEach((item) => {
    observer.observe(item);
  })
});
