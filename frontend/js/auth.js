document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const fullName = document.getElementById('register-name')?.value?.trim();
      const email = document.getElementById('register-email')?.value?.trim();
      const phone = document.getElementById('register-phone')?.value?.trim();
      const role = document.getElementById('register-role')?.value || 'BUYER';
      const password = document.getElementById('register-password')?.value;

      if (!fullName || !email || !phone || !password) {
        alert('Please complete all registration fields.');
        return;
      }

      console.log('Registration submitted:', { fullName, email, phone, role });
      alert('Registration is ready for backend integration.');
      window.location.href = 'login.html';
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('login-email')?.value?.trim();
      const password = document.getElementById('login-password')?.value;

      if (!email || !password) {
        alert('Email and password are required.');
        return;
      }

      console.log('Login submitted:', { email });
      alert('Login flow is ready for backend integration.');
      window.location.href = '../index.html';
    });
  }
});
