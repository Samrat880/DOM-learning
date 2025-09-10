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