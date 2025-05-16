function addition(a, b) {
  console.log(a + b);
}

function soustraction(a, b) {
  console.log(a - b);
}

function calculatrice(a, b, operation) {
  if (operation === "addition") {
    addition(a, b);
  } else if (operation === "soustraction") {
    soustraction(a, b);
  } else {
    console.log("Operation non reconnue !");
  }
}

calculatrice(10, 9, "addition");
calculatrice(10, 9, "soustraction");
calculatrice(10, 9, "division");
