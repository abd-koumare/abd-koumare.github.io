/**
 * Dark Mode Toggle JavaScript for Abdoulaye Koumaré's Portfolio
 * Author: Abdoulaye Koumaré
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check if user has a preference stored in localStorage
    const darkMode = localStorage.getItem('darkMode');
    
    // Function to enable dark mode
    const enableDarkMode = () => {
        // Add the dark-mode class to the body
        body.classList.add('dark-mode');
        // Update the toggle button icon
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        // Save the preference to localStorage
        localStorage.setItem('darkMode', 'enabled');
    };
    
    // Function to disable dark mode
    const disableDarkMode = () => {
        // Remove the dark-mode class from the body
        body.classList.remove('dark-mode');
        // Update the toggle button icon
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        // Save the preference to localStorage
        localStorage.setItem('darkMode', 'disabled');
    };
    
    // Check if user already has a preference
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    
    // Add event listener to the dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        // Check the current state
        const darkMode = localStorage.getItem('darkMode');
        
        // Toggle dark mode
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
    
    // Check for system preference if no preference is stored
    if (darkMode === null) {
        // Check if the user's system prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode();
        }
        
        // Listen for changes in system preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
});