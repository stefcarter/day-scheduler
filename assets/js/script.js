var reformatDate = moment().format('dddd, MMMM Do');
$("#timeEl").text(reformatDate);

// var saveButton = document.querySelector("save-button");
// var sevenEl = document.querySelector("#seven-hour");

// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var userInput = {
//         Hour7: sevenEl.value.trim(),
// };

//     localStorage.setItem("userInput", JSON.stringify(userInput));
//     renderMessage();
// });

// function renderMessage() {
//     var userInput = JSON.parse(localStorage.getItem("userInput"));
    
//     console.log("userInput")
// }

var saveButton = document.getElementById("save");
var comment = document.getElementById("#msg");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var timeSch = {
      comment: comment.value,
    };
    
    localStorage.setItem("tried", JSON.stringify(timeSch));
    renderMessage();
    
    });

    function renderMessage() {
        var userInput = JSON.parse(localStorage.getItem("studentGrade"));
        if (userInput !== null) {
          document.querySelector(".message").textContent = userInput.student + 
          " received a/an " + userInput.grade
        }
      }
      