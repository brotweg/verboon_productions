const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
        const offset = headerHeight - 30; // Add a little extra space to ensure the title is fully visible
        const offsetPosition = element.offsetTop - offset; // Calculate the offset position

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};