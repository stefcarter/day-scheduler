var reformatDate = moment().format('dddd, MMMM Do');
$("#timeEl").text(reformatDate);

var saveButton = document.querySelector("#save-button");
var sevenEl = document.querySelector("#est");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = {
        Hour7: sevenEl.value,
};

    localStorage.setItem("userInput", JSON.stringify(userInput));
    renderMessage();
});

function renderMessage() {
    var userInput = JSON.parse(localStorage.getItem("userInput"));
    
    console.log("userInput")
}
  