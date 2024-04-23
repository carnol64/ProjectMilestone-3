document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function() {
        checkPassword();
    });

    function checkPassword() {
        var passwordInput = document.getElementById("password").value;
        var correctPassword = "12-09-2023";
        if (passwordInput === correctPassword) {
            document.getElementById("passwordForm").style.display = "none";
            document.getElementById("tabContent").style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    }
});
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const toggleDarkMode = () => {
    const darkModeEnabled = body.classList.toggle('dark-mode');
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
    localStorage.setItem('darkModeToggleTimestamp', Date.now());
    dispatchDarkModeEvent(darkModeEnabled);
};


const dispatchDarkModeEvent = (darkModeEnabled) => {
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
    localStorage.setItem('darkModeToggleTimestamp', Date.now());
    localStorage.setItem('darkModeToggleEvent', 'toggle');
};

if (localStorage.getItem('darkModeEnabled') === 'true') {
    body.classList.add('dark-mode');
}

window.addEventListener('storage', (event) => {
    if (event.key === 'darkModeToggleEvent') {
        
        const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
        if (darkModeEnabled) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
});

darkModeToggle.addEventListener('click', toggleDarkMode);
const showHintButton = document.getElementById('showHintButton');
    const hint = document.getElementById('hint');

    
    showhint.addEventListener('click', function() {
        showhint.style.display = 'none';
        hint.style.display = 'block'
    });