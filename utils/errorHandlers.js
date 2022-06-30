const handleErrors = (err) => {
    let errors = { email: "", password: "" };
  
    if (err.message === "incorrect email") {
      errors.email = "That email is not registered";
    }
  
    if (err.message === "incorrect password") {
      errors.password = "That password is incorrect";
    }
  
    if (err.code === 11000) {
      errors.email = "Email is already registered";
      return errors;
    }
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  };

  module.exports = {
    handleErrors
}