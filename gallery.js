// Select overlay elements
const mediaItems = document.querySelectorAll('.media-item');
const overlay = document.getElementById('mediaOverlay');
const mediaDisplay = overlay.querySelector('.media-display');
const closeBtn = overlay.querySelector('.close-btn');

// Open overlay on media click
mediaItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    overlay.classList.remove('d-none');
    overlay.style.display = 'flex';
    const clone = e.target.cloneNode(true); // Clone the clicked media
    clone.classList.remove('img-fluid'); // Remove unnecessary classes

    // Check if the clicked media is a video
    if (clone.tagName === 'VIDEO') {
      clone.removeAttribute('controls'); // Initially remove controls
      clone.autoplay = true; // Set autoplay for video
      clone.muted = false; // Ensure audio plays if applicable
      clone.loop = false; // Optional: Add looping behavior if required

      // Add play/pause toggle functionality
      clone.addEventListener('click', () => {
        if (clone.paused) {
          clone.play();
        } else {
          clone.pause();
        }
      });

      mediaDisplay.innerHTML = ''; // Clear previous content
      mediaDisplay.appendChild(clone); // Add cloned video
      clone.play(); // Start playback immediately
    } else {
      // Handle non-video media (e.g., images)
      mediaDisplay.innerHTML = ''; // Clear previous content
      mediaDisplay.appendChild(clone); // Add cloned media
    }
  });
});

// Function to close overlay
function closeOverlay() {
  overlay.classList.add('d-none');
  overlay.style.display = 'none';
  mediaDisplay.innerHTML = ''; // Clear content when closed
}

// Close overlay on close button click
closeBtn.addEventListener('click', closeOverlay);

// Close overlay on overlay background click
overlay.addEventListener('click', (e) => {
  // Ensure the click is outside the media content
  if (e.target === overlay) {
    closeOverlay();
  }
});
