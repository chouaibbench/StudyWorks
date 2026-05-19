/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// CSRF token setup for fetch requests
const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.csrfToken = token.content;
}
