// ************toggle icon navbar************

document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".nav-bar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("fa-times");
      let pop = document.getElementById("hi");
      navbar.classList.toggle("active");
      pop.style.display = "inline";
    });
  } else {
    console.error("One or both of the elements not found.");
  }
});

// ************scroll section active************

let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ************sticky navbar************

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ************remove toggle icon and navbar************

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// ************scroll reveal************

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .projects-box, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// ************typed js************

const typed = new Typed(".multiple-text", {
  strings: ["Creative Frontend Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodymessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
   Mobile Number: ${phone.value}<br> Message: ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sribalaji016@gmail.com",
    Password: "40C2D994B1A6BE020A1CF7F19081979E23F3",
    To: "sribalaji016@gmail.com",
    From: "sribalaji016@gmail.com",
    Subject: subject.value,
    Body: "And this is the body",
  }).then((message) => alert(message));
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
