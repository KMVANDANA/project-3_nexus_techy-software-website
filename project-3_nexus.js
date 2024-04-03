document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling to section anchors
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust offset if you have a fixed header
          behavior: "smooth"
        });
      }
    });
  });

  // Form validation
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validateForm()) {
      // Here you can submit the form data using AJAX or any other method
      alert("Form submitted successfully!");
      contactForm.reset();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;
    if (nameInput.value.trim() === "") {
      isValid = false;
      showError(nameInput, "Name is required");
    } else {
      removeError(nameInput);
    }
    if (emailInput.value.trim() === "") {
      isValid = false;
      showError(emailInput, "Email is required");
    } else if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      showError(emailInput, "Please enter a valid email address");
    } else {
      removeError(emailInput);
    }
    if (messageInput.value.trim() === "") {
      isValid = false;
      showError(messageInput, "Message is required");
    } else {
      removeError(messageInput);
    }
    return isValid;
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector("small");
    errorMessage.innerText = message;
    formControl.classList.add("error");
  }

  function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
  }

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});
