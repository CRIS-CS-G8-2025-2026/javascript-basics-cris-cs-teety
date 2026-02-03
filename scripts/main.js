document.querySelector("h1").textContent = "JavaScript is SUPER Amazing";
document.addEventListener("DOMContentLoaded", () => {
  const firstName = "Korrathat";
  const lastName = "Intaraksasub";
  const fullName = firstName + " " + lastName;

  document.querySelector("h1").textContent = fullName;

  let age = 13;
  let ageElement = document.querySelector("#age");
  ageElement.textContent = "I am " + age + " years old";

  let p = document.createElement("p");
  p.textContent = "In 20 years, I will be " + (age + 20) + " years old.";
  ageElement.after(p);
});
