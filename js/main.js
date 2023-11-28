// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqContainter = document.querySelector(".faq-content");
  faqContainter.addEventListener("click", (e) => {
    // console.log(e.target);
    const groupHeader = e.target.closest(".faq-group-header"); // ako uopće nema .faq-group-header iznad, vratit će null :D
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");
    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
    // Toggle visibility of body
    groupBody.classList.toggle("open");
    // Close other open FAQ bodies
    const otherGroups = faqContainter.querySelectorAll(".faq-group");
    console.log(otherGroups);
    otherGroups.forEach((otherGroup) => {
      if (otherGroup != group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
//Hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButtonContainer = document.querySelector(".hamburger-button");
  hamburgerButtonContainer.addEventListener("click", (e) => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("active");
  });
});
