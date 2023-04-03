let globalSumit = false;

function validate(isSubmit = false) {
  let Name = document.getElementById("name").value;

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = false;
  console.log(isSubmit);

  if (isSubmit) {
    globalSumit = true;
  }
  // name condition
  if (globalSumit) {
    var letters = /^[a-zA-Z]*$/;
    if (isNaN(Name) && Name.length >= 3 && Name.match(letters)) {
      document.getElementById("name-valid").style.display = "block";
      document.getElementById("name-invalid").style.display = "none";
    } else {
      document.getElementById("name-invalid").style.display = "block";
      document.getElementById("name-valid").style.display = "none";
      error = true;
    }
  }
  //email condition
  if (
    email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
  ) {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } else {
    document.getElementById("invalid-email").style.display = "block";
    document.getElementById("valid-email").style.display = "none";
    error = true;
  }
  //password condition
  if (
    password.includes("@") &&
			password.length >= 6
  ) {
    document.getElementById("password-valid").style.display = "block";
    document.getElementById("password-invalid").style.display = "none";
  } else {
    document.getElementById("password-invalid").style.display = "block";
    document.getElementById("password-valid").style.display = "none";
    error = true;
  }

  // alert
  if (!error && isSubmit) {
    swal({
      title: "Success!",
      text: `Your details has been submitted`,
      icon: "success",
      button: "Ok",
    });

    document.getElementById("sign-up").reset();

    let validFeedback = document.getElementsByClassName("valid-feedback");
    for (i = 0; i < validFeedback.length; i++) {
      validFeedback[i].style.display = "none";
    }
    let invalidFeedback = document.getElementsByClassName("invalid-feedback");
    for (i = 0; i < invalidFeedback.length; i++) {
      invalidFeedback[i].style.display = "none";
    }
  }
}
