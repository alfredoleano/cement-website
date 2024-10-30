const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const phoneButton = document.querySelector('.phone-button');
const emailButton = document.querySelector('.email-button');
const phoneNumber = document.querySelector('.phone-number').textContent;
const emailAddress = document.querySelector('.email-address').textContent;

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open-mobile-nav-bar');
});

phoneButton.addEventListener('click', () => {
    const formattedPhone = `+${phoneNumber.replace(/-/g, '').trim()}`; // Prepend '+' and remove dashes
    window.location.href = `tel:${formattedPhone}`; // Use formatted phone number
});

emailButton.addEventListener('click', () => {
    window.location.href = `mailto:${emailAddress}?subject=Inquiry&body=Hello, I would like to...`;
});