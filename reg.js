const users = JSON.parse(localStorage.getItem("users")) || [];
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (users.some((user) => user.email === email)) {
      document.getElementById("message").innerText = "Email already registered!";
      return;
  }

  const newUser = { name, email, password};
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! You can now sign in.");
  setTimeout(() => {
      window.location.href = "SignIn Net.html";
  }, 1500);
});