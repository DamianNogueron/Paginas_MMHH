// Create the form element
const form = document.createElement('form');
form.setAttribute('action', 'mailto:damiannl94@gmail.com');
form.setAttribute('method', 'post');

// Create the input elements
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Your name');

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'Your email');

const messageInput = document.createElement('textarea');
messageInput.setAttribute('name', 'message');
messageInput.setAttribute('placeholder', 'Your message');

// Create the submit button
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Send');

// Add the input elements to the form
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(messageInput);

// Add the submit button to the form
form.appendChild(submitButton);

// Return the form
return form;
