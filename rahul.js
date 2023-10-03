// Sample user data (in practice, store this securely on the server)
const users = [{username:"spoo" , password:"passwd"},{username:"rahul" , password:"passwd"}];

// Function to perform user registration
function register() {
    const regUsername = document.getElementById("reg-username").value;
    const regPassword = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (regUsername.trim() === "" || regPassword.trim() === "") {
        alert("Username and password are required fields.");
        return;
    }

    if (regPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Check if the username is already taken
    if (users.some(u => u.username === regUsername)) {
        alert("Username already taken. Please choose a different one.");
        return;
    }

    // In practice, you should use a secure password hashing library like bcrypt.
    // Here, we are using a simple placeholder for password hashing.
    const hashedPassword = "passwd"; // Replace with actual password hashing

    // Add the new user to the list (in-memory)
    users.push({ username: regUsername, password: hashedPassword });

    alert("Successfully Registered!! You can now login.");
    clearRegistrationForm();
    window.location.href = "menu.html"; // Redirect to menu page
}

// Function to clear the registration form fields
function clearRegistrationForm() {
    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("confirm-password").value = "";
}

// Function to perform login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user by username
    const user = users.find(u => u.username === username);

    if (user && user.password === "passwd") {
		window.location.href = "index.html";
		alert("You are Logged In.");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to perform logout
function logout() {
    window.location.href = "menu.html"; // Redirect to menu page
}
