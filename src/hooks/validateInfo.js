const validate = (values) => {
  let errors = {};

  if (!values.email.trim()) {
    errors.email = "Whoops! It looks like you forgot to add your email";
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please provide a valid email address";
  }

  return errors;
}

export default validate;
