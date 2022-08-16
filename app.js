let metersdug = 0;
let energyAmount = 1000;
let intervalNumber = 0;
let moneyEarned = 0;
let costofAuto = 10;
let amountOfAuto = 0;
let speedofInterval = 6000;

const metersDugLabel = document.querySelector(".meters-dug-last");
const energyAmountNumber = document.querySelector(".energyAmounts");
const digActionButton = document.querySelector(".dig-button");
const currentMoney = document.querySelector(".money");
const costofAutominer = document.querySelector(".cost");
const buyautoMiner = document.querySelector(".autominer");

function dig() {
  metersdug++;
  updateDug();
  updateMoney();
  console.log(moneyEarned);
}

function autodig() {
  window.setInterval(dig, speedofInterval);
  updateDug();
}

function energyLoss() {
  energyAmount--;
  updateEnergy();
}

function AutoMinerBuy() {
  if (moneyEarned >= costofAuto) {
    amountOfAuto++;
    console.log("You have bought " + amountOfAuto + " autominers");
    moneyEarned -= costofAuto;
    costofAuto *= 1.2;
    autodig();
  }
  updateCostAuto();
  updateMoney();
}

let updateDug = () => {
  metersDugLabel.innerHTML = metersdug + "m";
};

let updateEnergy = () => {
  energyAmountNumber.innerHTML = energyAmount;
  if (energyAmount <= 0) {
    energyAmount++;
    metersdug--;
  }
};

let updateMoney = () => {
  currentMoney.innerHTML = moneyEarned;
  if (metersdug % 2) {
    moneyEarned++;
  }
};

let updateCostAuto = () => {
  costofAutominer.innerHTML = costofAuto;
};

digActionButton.addEventListener("click", dig);
digActionButton.addEventListener("click", energyLoss);
buyautoMiner.addEventListener("click", AutoMinerBuy);
