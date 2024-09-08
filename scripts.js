document.getElementById('togglePassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('password');
    const icon = this.classList;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.remove('bi-eye-slash');
      icon.add('bi-eye');
    } else {
      passwordInput.type = 'password';
      icon.remove('bi-eye');
      icon.add('bi-eye-slash');
    }
  });
  
  document.getElementById('toggleConfirmPassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('confirmPassword');
    const icon = this.classList;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.remove('bi-eye-slash');
      icon.add('bi-eye');
    } else {
      passwordInput.type = 'password';
      icon.remove('bi-eye');
      icon.add('bi-eye-slash');
    }
  });
  