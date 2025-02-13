document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // You can add more robust validation here

    // Simulate sending data (replace with actual API call)
    console.log('Form data:', { name, email, message });
    alert('Message envoyé!');
    contactForm.reset();
  });
});