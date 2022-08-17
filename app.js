let metersdug = 0;
let energyAmount = 1000;
let intervalNumber = 0;
let currentMoney = 0;
let costofAuto = 10;
let amountOfAuto = 0;
let speedofInterval = 6000;

//Labels
const metersDugLabel = document.querySelector(".meters-dug-last");
const money_label = document.querySelector(".money");
const energyAmountNumber = document.querySelector(".energyAmounts");
const costofAutominer = document.querySelector(".cost");
//Buttons
const digAction_button = document.querySelector(".dig-button");
const buyautoMiner_button = document.querySelector(".autominer");
const fasterAutominer_button = document.querySelector(".upgradeTime");

//Active functions
function dig() {
  metersdug++;
  updateDug();
  updateMoney();
  console.log(currentMoney);
}

function autodig() {
  setInterval(dig, speedofInterval);
  updateDug();
}

function energyLoss() {
  energyAmount--;
  updateEnergy();
}

function AutoMinerBuy() {
  if (currentMoney >= costofAuto) {
    amountOfAuto++;
    console.log("You have bought " + amountOfAuto + " autominers");
    currentMoney -= costofAuto;
    costofAuto *= 1.2;
    autodig();
    costofAuto = Math.floor(costofAuto);
  }
  updateCostAuto();
  updateMoney();
}

//function timeUpgradeBuy() {}

//Update functions
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
  if (metersdug % 2 === 0) {
    currentMoney++;
  }
  money_label.innerHTML = currentMoney;
};

let updateCostAuto = () => {
  costofAutominer.innerHTML = costofAuto;
};

//EventListeners
digAction_button.addEventListener("click", dig);
digAction_button.addEventListener("click", energyLoss);
buyautoMiner_button.addEventListener("click", AutoMinerBuy);
//fasterAutominer_button.addEventListener("click");
