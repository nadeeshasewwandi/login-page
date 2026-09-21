function validateEmail(email: string): string {
  const value = email.trim();

  if (!value) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    return "Please enter a valid email";
  }

  return "";
}

function validatePassword(password: string): string {
  if (!password.trim()) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password is too short";
  }

  return "";
}

export { validateEmail, validatePassword };