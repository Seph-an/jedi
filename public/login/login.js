const loginSection = createSectionWithClasses("login-section", "login-section");

const loginContainer = createDivWithClasses(
  "login-container container flex flex-col flex-centre-xy"
);

const loginHeader = createH1WithClasses(
  "login-header",
  "Enter Your Credentials To Log In."
);

// const loginForm = createDivWithClasses(
//   "login-form flex flex-col flex-centre-y"
// );
const loginForm = createForm(
  "login-form flex flex-col flex-centre-y",
  "login-form"
);

const user = createLabelAndInput(
  "Username :",
  false,
  false,
  "username",
  "text",
  "Enter your username",
  "",
  "username",
  true
);

const password = createLabelAndInput(
  "Password :",
  false,
  false,
  "password",
  "password",
  "Enter your password",
  "",
  "password",
  "true"
);

const loginBtn = createLabelAndInput(
  "",
  false,
  false,
  "login-btn form-btn",
  "submit",
  "",
  "Login",
  "login-btn",
  ""
);

// const loginIcon = createImg();
// loginIcon.className = "login-icon";
// loginIcon.src = "../resources/imgs/login.svg";

// const loginBtn = createButton(
//   false,
//   "login-btn",
//   "",
//   "Login",
//   "",
//   "../resources/imgs/login.svg",
//   false,
//   false,
//   "submit"
// );
loginForm.append(user, password, loginBtn);

const forgotPwd = createPWithClasses(
  "forgot-pwd",
  "Forgot credentials? Contact admin."
);

loginContainer.append(loginHeader, loginForm, forgotPwd);
loginSection.append(navigationBar, loginContainer);

document.querySelector("body").append(loginSection, footerSection);

const delegateSubmitToBody = document.body;
delegateSubmitToBody.addEventListener("submit", submitFired);

function submitFired(e) {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const form = e.target;
    const loginName = form.querySelector(".username").value;
    const loginPass = form.querySelector(".password").value;
    handleFormSubmitInquiry(loginName, loginPass);
  }
}

function handleFormSubmitInquiry(username, password) {
  const url = "http://localhost:3000/login";

  const body = {
    user: username,
    pass: password,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset =UTF-8" },
  };

  //add the click functionality on the login btn
  fetch(url, options)
    .then((res) => {
      console.log("Status", res.status);
      if (res.status === 200) {
        console.log("Success loggin in");
        window.location.href = "/";
        // return res.json();
      } else if (res.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Error");
      }
    })
    // .then((data) => {
    //   if (data && data.username) {
    //     console.log("Logged in as:", data.username);
    //     window.location.href = "http://localhost:3000/";
    //   }
    // })
    .catch((error) => {
      console.error("Error:", error);
    });
}
