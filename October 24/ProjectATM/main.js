"use strict";

const clients = [
  {
    pin: "1234",
    currentBalance: 120000,
  },
  {
    pin: "1224",
    currentBalance: 10000,
  },
];

let lastOp = [];

const Elform = document.querySelector("form");
const validP = document.getElementById("validation");

const elDepositB = document.querySelector("#deposit");
const elWithdrawB = document.querySelector("#withdraw");
const elBalanceB = document.querySelector("#balance");
const elLastOpB = document.querySelector("#last-operation");

const elOpWithdraw = document.querySelector("#operation-withdraw");
const elOpDeposit = document.querySelector("#operation-deposit");

const elBtnInputDeposit = document.querySelector("#input-deposit");
const elBtnInputWithdraw = document.querySelector("#input-withdraw");

const nav = document.querySelector("nav");
const allBTN = nav.querySelectorAll("button");

const ulOperations = document.querySelector("ul.hidden");

const divContainer = document.querySelector(".container");

const lastOperations = document.getElementById("last-operationEl");
const elBalance = document.getElementById("balanceEl");

const elUl = document.getElementById("ul");
const h4 = document.querySelector("h4");
const btnExit = document.querySelector(".btnn");

const userInput = document.querySelector("input");
let attempts = 0;
Elform.addEventListener("submit", (ev) => {
  ev.preventDefault(ev);
  validP.textContent = "";
  const isClient = clients.some((curClient) => {
    if (userInput.value === curClient.pin) {
      ulOperations.classList.remove("hidden");
      Elform.classList.add("hidden");
      h4.classList.add("h4");
      btnExit.classList.remove("btnn");
      return true;
    }
  });
  if (!isClient) {
    validP.textContent = "PIN INcorrect, try again!";
    attempts++;
    h4.classList.add("h4");
    if (attempts >= 3) {
      alert(
        "You have reached the limit, please try again later or contact us *3665"
      );
      Elform.classList.add("hidden");
      validP.textContent = "To contact us *3665";
    }
  }
});

const containers = divContainer.querySelectorAll("div");
allBTN.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    containers.forEach((container) => {
      container.classList.add("hidden");
    });

    const elCurrent = document.querySelector(`#${ev.target.id}El`);

    elCurrent.classList.toggle("hidden");
  });
});
function deposit(id) {
  const currentClient = clients.find((client) => client.pin === id);
  currentClient.currentBalance += Number(elBtnInputDeposit.value);
  alert(
    `The operation was successful, your current balance is ${currentClient.currentBalance}$`
  );
  lastOp.push(`Deposit of ${elBtnInputDeposit.value}$`);
  elBtnInputDeposit.value = "";
}

function withdraw(id) {
  const currentClient = clients.find((client) => client.pin === id);
  if (currentClient.currentBalance > elBtnInputWithdraw.value) {
    currentClient.currentBalance -= Number(elBtnInputWithdraw.value);
    alert(
      `The operation was successful, your current balance is ${currentClient.currentBalance}$`
    );
    lastOp.push(`Withdrawal of ${elBtnInputWithdraw.value}$`);
    elBtnInputWithdraw.value = "";
  } else {
    alert("Failed, you are trying to withdraw more money than you have");
  }
}

function showOperations() {
  elUl.textContent = "";
  const start = Math.max(0, lastOp.length - 4);

  for (let i = start; i < lastOp.length; i++) {
    const operation = document.createElement("li");
    operation.textContent = lastOp[i];
    elUl.appendChild(operation);
  }
}
const balance = document.createElement("p");
function showBalance(id) {
  //   balance.textContent = "";
  const currentClient = clients.find((client) => client.pin === id);
  balance.textContent = `${currentClient.currentBalance}$`;
  elBalance.appendChild(balance);
}
function backToWelcome() {
  location.reload();
}

elOpDeposit.addEventListener("click", () => {
  deposit(userInput.value);
});
elOpWithdraw.addEventListener("click", () => {
  withdraw(userInput.value);
});
elLastOpB.addEventListener("click", () => {
  showOperations();
});
elBalanceB.addEventListener("click", () => {
  balance.textContent = "";
  showBalance(userInput.value);
});
btnExit.addEventListener("click", () => {
  backToWelcome();
});
