 // JavaScript to handle the modal image display
 const galleryItems = document.querySelectorAll('.gallery-item');
 const modalImage = document.getElementById('modalImage');
 const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

 galleryItems.forEach(item => {
     item.addEventListener('click', function() {
         const imageSrc = this.querySelector('img').src;
         modalImage.src = imageSrc;  // Set the clicked image to the modal
         imageModal.show();  // Show the modal
     });
 });