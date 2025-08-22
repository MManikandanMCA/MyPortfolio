document.addEventListener("DOMContentLoaded", function () {
  console.log(
    document.getElementById("name").value,
    document.getElementById("email").value,
    document.getElementById("textarea").value
  );
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("textarea").value,
    };
    console.log(params);
    emailjs
      .send("service_6xqfnsb", "template_nzyokfx", params)
      .then(() => {
        alert("Details sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send details, please try again.");
        console.error("EmailJS error:", error);
      });
  });
});
