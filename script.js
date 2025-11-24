document.addEventListener('DOMContentLoaded', () => {
    // 1. Data for Blood Types
    const bloodTypes = [
        { type: "O Positive (O+)", description: "Most common type. Universal donor for all Rh positive types." },
        { type: "O Negative (O-)", description: "**Universal Donor.** Can be transfused to patients of any blood type." },
        { type: "A Positive (A+)", description: "Second most common type. Can receive from A+, A-, O+, O-." },
        { type: "A Negative (A-)", description: "Can donate to A+, A-, AB+, AB-. Can receive from A-, O-." },
        { type: "B Positive (B+)", description: "Can donate to B+, AB+. Can receive from B+, B-, O+, O-." },
        { type: "B Negative (B-)", description: "Can donate to B+, B-, AB+, AB-. Can receive from B-, O-." },
        { type: "AB Positive (AB+)", description: "**Universal Recipient.** Can receive blood from all types." },
        { type: "AB Negative (AB-)", description: "Can donate to AB+, AB-. Can receive from A-, B-, O-, AB-." }
    ];

    // 2. Populate Blood Types Section
    const typesContainer = document.querySelector('.types-container');

    bloodTypes.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('type-card');
        card.innerHTML = `
            <h3>${data.type}</h3>
            <p>${data.description}</p>
        `;
        typesContainer.appendChild(card);
    });

    // 3. Handle Form Submission (Client-side simulation)
    const donationForm = document.getElementById('donation-form');
    const formMessage = document.getElementById('form-message');

    if (donationForm) {
        donationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from actually submitting (since there's no backend)

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            // const message = document.getElementById('message').value;

            // Display success message
            formMessage.textContent = `Thank you, ${name}! Your inquiry has been submitted. We will contact you at ${email} shortly.`;
            formMessage.classList.remove('hidden');

            // Optionally, clear the form
            donationForm.reset();

            // Hide the message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // 4. Simple CTA button alert
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Redirecting you to the nearest center map! (Simulation)');
        });
    }
});