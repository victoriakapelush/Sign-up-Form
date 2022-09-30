const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone_number');
const password = document.getElementById('password');
const btn = document.getElementsByTagName('button');


function alertBtn() {
    if (document.getElementById('first_name').value.length == 0) {
        alert ('Please enter your first name.')
    } else if (document.getElementById('last_name').value.length == 0) {
        alert ('Please enter your last name.')
    } else if (document.getElementById('email').value.length == 0) {
        alert ('Please enter your email.')
    } else if (document.getElementById('phone_number').value.length == 0) {
        alert ('Please enter your phone number.')
    } else if (document.getElementById('password').value.length == 0) {
        alert ('Please enter your password.')
    } else {
        alert ('The form has been submitted. Thank you!');
    }
}