// example = 1

document
    .getElementById("changeTextButton")
    .addEventListener("click", function (){
        let paragraph = document.getElementById("myParagraph")
        console.log(paragraph)
        paragraph.innerHTML = "The Paragraph is changed"
})


// example 2
document
.getElementById("highLightFirstCity")
.addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
})

// Example 3

document
.getElementById("changeOrder")
.addEventListener('click' , function () {
    let coffeType = document.getElementById("coffeType");
    coffeType.textContent = "Espresso";
    coffeType.style.backgroundColor = "brown"
    coffeType.style.padding = "5px"
})

// Example 4

document.getElementById("addNewItem").addEventListener('click', function (){
    let newList = document.createElement('li')
    newList.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newList)
})

// Example 5

document.getElementById("removeLastTask").addEventListener(
    'click', function (){
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    }
);


// Example 6

document.getElementById("clickButton").addEventListener("click", function () {
  alert("learn js");
});

// Example 7

document
.getElementById("teaList")
.addEventListener('click',function(event){
    if (event.target && event.target.matches(".teaItem")) {
        alert("you selected: " + event.target.textContent)
    }
})

// Example 8

document.getElementById("FeedbackForm").addEventListener('submit', function (e) {
  e.preventDefault();
  let feedback = document.getElementById("FeedbackInput").value;
  console.log(feedback);

  let label = document.querySelector('label[for="FeedbackInput"]');
  console.log(label.textContent); // "Your Feedback"

  document.getElementById(
    "FeedbackDisplay"
  ).textContent = `FeedBack is: ${feedback} `;
})

//  Example 9

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domStatus").textContent = "DOM fully loade";
});

// Example 10

document.getElementById("toogleHighlight")
.addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.add("highlight")
});