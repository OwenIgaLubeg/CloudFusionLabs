const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);
// Change slide every 4 seconds
setInterval(nextSlide, 4000);

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        phone: phone,
        company: company,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Message could not be sent. Please try again later.');
    });
});