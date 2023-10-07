let result = document.querySelector("#result");
let buttons = document.querySelectorAll(".buttons");

result.innerText = "0";
let content = "";

const operations = [
  {
    operation: "+",
    process: (a, b) => a + b,
  },
  {
    operation: "-",
    process: (a, b) => a - b,
  },
  {
    operation: "/",
    process: (a, b) => a / b,
  },
  {
    operation: "*",
    process: (a, b) => a * b,
  },
];

buttons.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const value = e.target.innerText;

    const getOperation = operations.find((item) =>
      content.includes(item.operation)
    );

    if (value === "=") {
      let [a, b] = content.split(getOperation.operation);
      const calcuted = getOperation.process(Number(a), Number(b));
      result.innerText = calcuted;
      content = String(calcuted);

      return;
    }

    switch (value) {
      case "0":
        if (result.innerText === "0") {
          result.innerText = "0";
        } else {
          content += value;
          result.innerText = content;
        }
        break;

      case "Delete":
        let last = result.innerText.substr(0, result.innerText.length - 1);
        result.innerText = last;
        content = last;
        if (result.innerText === "") {
          result.innerText = "0";
          content = "";
        }
        break;

      case "C":
        result.innerText = "0";
        content = "";
        break;

      case "CE":
        result.innerText = "0";
        content = "";
        break;

      case "+":
        if (result.innerText === "0") {
          result.innerText = "0";
        } else {
          content += value;
          result.innerText = content;
        }
        break;

      case "-":
        if (result.innerText === "0") {
          result.innerText = "0";
        } else {
          content += value;
          result.innerText = content;
        }
        break;

      case "/":
        if (result.innerText === "0") {
          result.innerText = "0";
        } else {
          content += value;
          result.innerText = content;
        }
        break;

      case "*":
        if (result.innerText === "0") {
          result.innerText = "0";
        } else {
          content += value;
          result.innerText = content;
        }
        break;

      default:
        content += value;
        result.innerText = content;
    }
  });
});
