
export function validateStep1(formData) {
  const errors = {};

  if (!formData.name || !formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email || !formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
}
