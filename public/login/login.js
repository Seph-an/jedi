const loginSection = createSectionWithClasses("login-section", "login-section");

const loginContainer = createDivWithClasses(
  "login-container container flex flex-col flex-centre-xy"
);

const loginHeader = createH1WithClasses(
  "login-header",
  "Enter Your Credentials To Log In."
);

const loginForm = createDivWithClasses(
  "login-form flex flex-col flex-centre-y"
);

const user = createLabelAndInput(
  "Username :",
  false,
  false,
  "username",
  "text",
  "Enter your username",
  "",
  "username"
);

const password = createLabelAndInput(
  "Password :",
  false,
  false,
  "password",
  "password",
  "Enter your password",
  "",
  "password"
);
const loginBtn = createButton(
  false,
  "login-btn",
  "/adm",
  "Login",
  "",
  "../resources/imgs/login.svg",
  false,
  false
);
loginForm.append(user, password, loginBtn);

const forgotPwd = createPWithClasses(
  "forgot-pwd",
  "Forgot credentials? Contact admin."
);

loginContainer.append(loginHeader, loginForm, forgotPwd);
loginSection.append(navigationBar, loginContainer);

document.querySelector("body").append(loginSection, footerSection);
