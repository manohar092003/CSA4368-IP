function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Simple validation checks
    if (username === "") {
        alert("Username is required");
        return false;
    }

    if (password === "") {
        alert("Password is required");
        return false;
    }

    if (email === "") {
        alert("Email is required");
        return false;
    }

    // You can add more complex validation rules for password strength, email format, etc.

    return true; // Form will be submitted if all validation checks pass
}
