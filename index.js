let body = document.querySelector("body");
body.style.fontFamily = "Arial, Helvetica, sans-serif";

// Centering The Heading on the top of the page

let h1Center = document.querySelector("h1");
h1Center.align = "center";

// Setting for the three food-cards

let main = document.querySelector(".main");
main.style.display = "flex";
main.style.justifyContent = "space-between";

let foodCategory = document
  .querySelectorAll(".food-category")
  .forEach((item) => {
    item.style.width = "25%";
    item.style.padding = "2rem";
    item.style.lineHeight = "2rem";
  });

// Styling the headings of the food-cards

let foodHeadings = document
  .querySelectorAll(".food-category label")
  .forEach((item) => {
    item.style.fontSize = "2rem";
    item.style.borderBottom = "1px solid black";
    item.style.fontStyle = "italic";
  });

var divs = document.querySelectorAll(".food-category");

// Setting different colors for the food-cards

let firstFoodField = document.querySelector("#firstFoodField");
firstFoodField.style.backgroundColor = "#e5c4af";
let secondFoodField = document.querySelector("#secondFoodField");
secondFoodField.style.backgroundColor = "#e8ccf1";
let thirdFoodField = document.querySelector("#thirdFoodField");
thirdFoodField.style.backgroundColor = "#eeafaf";

// allergy-warning section

let warning = document.querySelector("#warning");
warning.style.fontWeight = "bolder";
warning.style.fontSize = "1.8rem";

let allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.flexDirection = "column";
allergyWarning.style.alignItems = "center";
allergyWarning.style.justifyItems = "flexStart";

// allergy-info

let allergies = document.querySelector(".allergies");
allergies.style.width = "20rem";

let allergyInfoEven = document
  .querySelectorAll(".allergies li:nth-child(even)")
  .forEach((item) => {
    item.style.backgroundColor = "#87c8ee";
  });

let allergyInfo = document.querySelectorAll(".allergies li").forEach((item) => {
  item.style.listStyle = "none";
});

// Footer

let footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.justifyContent = "space-around";
footer.style.padding = "2rem 30vw 0 30vw";

// Styling food-descs

let foodDesk = document.querySelectorAll(".footer section").forEach((item) => {
  item.style.display = "flex";
  item.style.justifyContent = "center";
  item.style.alignItems = "center";
  item.style.height = "7rem";
  item.style.width = "7rem";
  item.style.border = "3px solid #fead00";
  item.style.borderRadius = "50%";
});
