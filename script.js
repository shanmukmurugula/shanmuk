
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    document.getElementById('show-signup').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });
