// Get the modals and close buttons
var modals = document.querySelectorAll('.modal');
var closeButtons = document.querySelectorAll('.close');

// Loop through each modal
modals.forEach(function(modal, index) {
    // Get the modal content and image source
    var modalContent = modal.querySelector('.modal-content');
    var imageSrc = document.querySelector('#content' + (index + 1)).innerHTML;

    // Set initial content of modal
    modalContent.innerHTML = imageSrc;

    // Add click event listener to open modal
    document.getElementById('img' + (index + 1)).addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Add click event listener to close modal
    closeButtons[index].addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});