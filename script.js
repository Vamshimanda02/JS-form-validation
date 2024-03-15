document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var errors = [];
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (fullName.length < 5) {
    errors.push('Name must be at least 5 characters long.');
  }

  if (!email.includes('@')) {
    errors.push('Enter a valid email address.');
  }

  if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
    errors.push('Phone number must be a 10-digit number and not equal to 123456789.');
  }

  if (password.length < 8 || password === 'password' || password === fullName) {
    errors.push('Password must be at least 8 characters long and not equal to "password" or the user\'s name.');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match.');
  }

  displayErrors(errors);
}

function displayErrors(errors) {
  var errorContainer = document.getElementById('errorContainer');
  errorContainer.innerHTML = '';

  if (errors.length === 0) {
    var successMessage = document.createElement('div');
    successMessage.classList.add('alert', 'alert-success');
    successMessage.textContent = 'Form submitted successfully.';
    errorContainer.appendChild(successMessage);
  } else {
    errors.forEach(function(error) {
      var errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger');
      errorMessage.textContent = error;
      errorContainer.appendChild(errorMessage);
    });
  }
}