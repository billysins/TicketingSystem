let slideIndex = 0; // Initialize the slide index
showSlides(slideIndex); // Display the first slide

// Function to change slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {slideIndex = 0} // Loop back to the first slide
    if (n < 0) {slideIndex = slides.length - 1} // Go to the last slide if moving backward from the first slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "block"; // Show the current slide
}
