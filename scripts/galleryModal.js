// Get the modal
const modal = document.getElementById('gallery-modal');
// Get the image element inside the modal
const modalImage = modal.querySelector('.modal-image');
// Get all elements with class "gallery-picture"
const galleryPictures = document.querySelectorAll('.gallery-picture');
// Loop through each gallery picture and add a click event listener
galleryPictures.forEach(picture => {
    picture.addEventListener('click', () => {
        // Set the source of the modal image to the clicked picture's source
        modalImage.src = picture.src;
        // Display the modal
        modal.style.display = 'block';
    });
});

// Get the <span> element that closes the modal
const closeBtn = modal.querySelector('.gallery-close');
// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});