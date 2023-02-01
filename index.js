const email = document.getElementById("Email");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("notify-me");
const errorMsg1 = document.querySelector(".error1");
const errorMsg2 = document.querySelector(".error2");

const mailEnd = "@gmail.com";
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  email.onfocus = function () {
    errorMsg1.style.display = "none";
    errorMsg2.style.display = "none";
    email.style.border = "";
  };
  if (email.value !== "" && email.value.endsWith(mailEnd)) {
    form.submit();
    console.log(email.value);
  } else if (email.value === "") {
    email.style.border = "1px solid hsl(354, 100%, 66%)";
    errorMsg1.style.display = "block";
  } else if (!email.value.endsWith(mailEnd)) {
    errorMsg2.style.display = "block";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  }
});
