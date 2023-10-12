"use strict";
const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    console.log(data);
    if (response.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(data.error);
    }
  });
};
userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    console.log(data);
    if (response.success) {
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(data.error);
    }
  });
};
