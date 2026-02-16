/**
 * AUTH-CHECK.JS - Quick authentication check for protected pages
 * Include this script at the top of any page that requires login
 */

(async () => {
    // Check if Auth is loaded
    if (typeof Auth === 'undefined') {
        console.error('Auth module not loaded!');
        window.location.replace('../login.html');
        return;
    }

    // Check session validity
    if (!Auth.isSessionValid()) {
        console.log('No valid session, redirecting to login');
        window.location.replace('../login.html');
        return;
    }
    
    // Validate with server
    try {
        const isValid = await Auth.validateSession();
        if (!isValid) {
            console.log('Session validation failed, redirecting to login');
            Auth.clearSession();
            window.location.replace('../login.html');
        } else {
            console.log('Session valid ✓');
        }
    } catch (e) {
        console.error('Session validation error:', e);
        Auth.clearSession();
        window.location.replace('../login.html');
    }
})();

// Logout function for module pages
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        Auth.clearSession();
        window.location.replace('../login.html');
    }
}
