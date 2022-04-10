var reformatDate = moment().format('dddd, MMMM Do');
$("#timeEl").text(reformatDate);

var saveButton = document.querySelector("save-button");
var sevenEl = document.querySelector("#msg7");
var eightEl = document.querySelector("#msg8");
var nineEl = document.querySelector("#msg9");
var tenEl = document.querySelector("#msg10");
var elevenEl = document.querySelector("#msg11");
var twelveEl = document.querySelector("#msg12");
var oneEl = document.querySelector("#msg1");
var twoEl = document.querySelector("#msg2");
var threeEl = document.querySelector("#msg3");
var fourEl = document.querySelector("#msg4");

window.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = {
        Hour7: sevenEl.value,
        Hour8: eightEl.value,
        Hour9: nineEl.value,
        Hour10: tenEl.value,
        Hour11: elevenEl.value,
        Hour12: twelveEl.value,
        Hour1: oneEl.value,
        Hour2: twoEl.value,
        Hour3: threeEl.value,
        Hour4: fourEl.value,
};

    localStorage.setItem("userInput", JSON.stringify(userInput));
    renderMessage();
});

function renderMessage() {
    var userInput = JSON.parse(localStorage.getItem("userInput"));
    
    console.log("userInput")
}
