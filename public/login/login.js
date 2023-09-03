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

loginForm.append(user, password, loginBtn);

const forgotPwd = createPWithClasses(
  "forgot-pwd",
  "Forgot credentials? Contact admin."
);

loginContainer.append(loginHeader, loginForm, forgotPwd);
loginSection.append(navigationBar, loginContainer);

document.querySelector("body").append(loginSection, popUp, footerSection);

const pop = document.querySelector(".pop-up");
const popContentDiv = pop.querySelector(".pop-div");

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
        window.location.href = "/interface";
        // return res.json();
      } else if (res.status === 401) {
        pop.classList.toggle("pop-up-none");
        pop.style.background = "#fde8ec";
        const popContent = createPWithClasses(
          "pop-content",
          "Wrong username or password!"
        );
        const popContent2 = createPWithClasses(
          "pop-content",
          "Consult admin if problem persists."
        );
        popContent.style.color = "#db0129";
        popContentDiv.append(popContent, popContent2);
        timerId = setTimeout(() => {
          pop.style.background = "";
          popContentDiv.removeChild(popContent);
          popContentDiv.removeChild(popContent2);
          pop.classList.toggle("pop-up-none");
        }, 2000);
        //try clearing timerId on clicking x
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
