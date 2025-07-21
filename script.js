// Select all anchor links with class 'nav-link'
    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop default jump

      // Get the target section's ID from href attribute
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

      // Scroll to that section smoothly
        targetElement.scrollIntoView({
        behavior: 'smooth'
    });
    });
})