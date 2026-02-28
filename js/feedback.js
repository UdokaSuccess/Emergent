document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const button = form.querySelector("button[type='submit']");

  form.addEventListener("submit", function () {

    // Disable button to prevent double submit
    button.disabled = true;
    button.innerText = "Submitting...";

    // Optional small delay effect
    setTimeout(() => {
      button.innerText = "Submitted ✔";
    }, 800);

  });

});