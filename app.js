(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.querySelector("#sendEmailButton").addEventListener("click", function(event) {
    event.preventDefault();
  
    const nameInput = document.querySelector(".contact-form .i-c-2 input[type='text']");
    const emailInput = document.querySelector(".contact-form .i-c-2 input[type='email']");
    const subjectInput = document.querySelector(".contact-form .input-control input[type='text']");
    const messageInput = document.querySelector(".contact-form .input-control textarea");
  
    const name = encodeURIComponent(nameInput.value);
    const email = encodeURIComponent(emailInput.value);
    const subject = encodeURIComponent(subjectInput.value);
    const message = encodeURIComponent(messageInput.value);
  
    const mailto = `mailto:smmbonvalot@gmail.com?subject=${subject}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailto;
  });