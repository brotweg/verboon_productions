// Get the modals and close buttons
var modals = document.querySelectorAll('.modal');
var closeButtons = document.querySelectorAll('.close');

// Loop through each modal
modals.forEach(function(modal, index) {
    // Add click event listener to open modal
    document.getElementById('img' + (index + 1)).addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Get the video specific to this modal
        var video = modal.querySelector('video');
        if (video) {
            video.play(); // Play the video when the modal opens
        }
    });

    // Add click event listener to close modal
    closeButtons[index].addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');

        var video = modal.querySelector('video');
        if (video) {
            video.pause(); // Pause the video when the modal closes
            video.currentTime = 0; // Optionally reset to the beginning
        }
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');

            var video = modal.querySelector('video');
            if (video) {
                video.pause(); // Pause the video when the modal closes
                video.currentTime = 0; // Optionally reset to the beginning
            }
        }
    });
});
