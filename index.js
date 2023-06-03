let result = document.getElementById("number");
let slider = document.getElementById("length-range");
let input = document.querySelector(".input");
let btn = document.querySelector(".generate-btn");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("thre");
let four = document.getElementById("four");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let medium = document.getElementById("medium");
const copied = document.querySelector(".copied");
const copy = document.querySelector(".copy-div");

var upperactive = 0;
var loweractive = 0;
var numberactive = 0;
var symbolactive = 0;
var strength = 0;

one.addEventListener("click", () => {
  if (upperactive == 0) {
    upperactive++;
    strength++;
    one.style.backgroundColor = "#A4FFAF";
    one.style.border = "none";
    check1.style.display = "inline";
  } else {
    upperactive--;
    strength--;
    one.style.backgroundColor = "";
    one.style.border = "";
    check1.style.display = "";
  }
});

two.addEventListener("click", () => {
  if (loweractive == 0) {
    loweractive++;
    strength++;
    two.style.backgroundColor = "#A4FFAF";
    two.style.border = "none";
    check2.style.display = "inline";
  } else {
    loweractive--;
    strength--;
    two.style.backgroundColor = "";
    two.style.border = "";
    check2.style.display = "";
  }
});

three.addEventListener("click", () => {
  if (numberactive == 0) {
    numberactive++;
    strength++;
    three.style.backgroundColor = "#A4FFAF";
    three.style.border = "none";
    check3.style.display = "inline";
  } else {
    numberactive--;
    strength--;
    three.style.backgroundColor = "";
    three.style.border = "";
    check3.style.display = "";
  }
});

four.addEventListener("click", () => {
  if (symbolactive == 0) {
    symbolactive++;
    strength++;
    four.style.backgroundColor = "#A4FFAF";
    four.style.border = "none";
    check4.style.display = "inline";
  } else {
    symbolactive--;
    strength--;
    four.style.backgroundColor = "";
    four.style.border = "";
    check4.style.display = "";
  }
});

function strengthsize(strengthsize) {
  if (strengthsize == 1) {
    medium.innerHTML = "TOO WEAK";
    first.style.backgroundColor = "#F64A4A";
    first.style.border = "none";
    second.style.backgroundColor = "";
    second.style.border = "";
    third.style.backgroundColor = "";
    third.style.border = "";
    fourth.style.backgroundColor = "";
    fourth.style.border = "";
  } else if (strengthsize == 2) {
    medium.innerHTML = "WEAK";
    first.style.backgroundColor = "#FB7C58";
    first.style.border = "none";
    second.style.backgroundColor = "#FB7C58";
    second.style.border = "none";
    third.style.backgroundColor = "";
    third.style.border = "";
    fourth.style.backgroundColor = "";
    fourth.style.border = "";
  } else if (strengthsize == 3) {
    medium.innerHTML = "MEDIUM";
    first.style.backgroundColor = "#F8CD65";
    first.style.border = "none";
    second.style.backgroundColor = "#F8CD65";
    second.style.border = "none";
    third.style.backgroundColor = "#F8CD65";
    third.style.border = "none";
    fourth.style.backgroundColor = "";
    fourth.style.border = "";
  } else if (strengthsize == 4) {
    medium.innerHTML = "STRONG";
    first.style.backgroundColor = "#A4FFAF";
    first.style.border = "none";
    second.style.backgroundColor = "#A4FFAF";
    second.style.border = "none";
    third.style.backgroundColor = "#A4FFAF";
    third.style.border = "none";
    fourth.style.backgroundColor = "#A4FFAF";
    fourth.style.border = "none";
  } else {
    medium.innerHTML = "";
    first.style.backgroundColor = "";
    first.style.border = "";
    second.style.backgroundColor = "";
    second.style.border = "";
    third.style.backgroundColor = "";
    third.style.border = "";
    fourth.style.backgroundColor = "";
    fourth.style.border = "";
  }
}

slider.addEventListener("input", () => {
  input.textContent = "LOADING...";
  result.textContent = slider.value;
});
slider.oninput = function () {
  const valueSlider = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    valueSlider +
    "%, #18171F " +
    valueSlider +
    "%, #18171F 100%)";
};

function generatePassword(length) {
  let characters = "";
  let password = "";

  if (loweractive) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperactive) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (symbolactive) {
    characters += '!@#$%^""&()';
  }
  if (numberactive) {
    characters += "0123456789";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

function handleButtonClick() {
  var passwordLength = slider.value;
  var generatedPassword = generatePassword(passwordLength);
  strengthsize(strength);
  input.value = generatedPassword;
  copied.style.display = "none";
}

btn.addEventListener("click", handleButtonClick);

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  copied.style.display = "inline";
});
