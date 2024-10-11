document.addEventListener("DOMContentLoaded", function () {
    const personButtons = document.querySelectorAll(".buttonGroup.people button"); 
    const mealButtons = document.querySelectorAll(".buttonGroup.meals button"); 
    const mealDropdown = document.querySelector(".dropdownMenu");
    const continueBtn = document.getElementById("fortsaetBtn");

    let selectedPeople = 1; 
    let selectedMeals = 1; 
    let selectedMealKitPrice = 40; 

    // Event listeners for the number of people 
    personButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedPeople = parseInt(this.value);
            localStorage.setItem("selectedPeople", selectedPeople);
        });
    });

    // Event listeners for the number of meals 
    mealButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedMeals = parseInt(this.value);
            localStorage.setItem("selectedMeals", selectedMeals);
        });
    });

    // Event listener for the meal dropdown
    mealDropdown.addEventListener("change", function () {
        selectedMealKitPrice = parseInt(this.value);
        localStorage.setItem("selectedMealKitPrice", selectedMealKitPrice);
    });

    // Store all selections in localStorage when the continue button is clicked
    continueBtn.addEventListener("click", function () {
        const totalSum = selectedPeople * selectedMeals * selectedMealKitPrice;
        localStorage.setItem("totalSum", totalSum);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the total 
    const totalSum = localStorage.getItem("totalSum");

    // Set total sum payment input field
    if (totalSum) {
        document.getElementById("totalSum").value = totalSum;
    }
});