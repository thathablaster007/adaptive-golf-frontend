export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return !!value;
};

export const validateForm = (formData) => {
  const errors = {};

  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(formData.interestedIn)) {
    errors.interestedIn = 'Please select what you\'re interested in';
  }

  if (!isRequired(formData.message)) {
    errors.message = 'Message is required';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};
