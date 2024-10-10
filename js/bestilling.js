document.addEventListener("DOMContentLoaded", function () {
    const personButtons = document.querySelectorAll(".buttonGroup button");
    const mealButtons = document.querySelectorAll(".buttonGroup button");
    const mealDropdown = document.querySelector(".dropdownMenu");
    const continueBtn = document.getElementById("fortsaetBtn");

    let selectedPeople = 1; // default to 1 person
    let selectedMeals = 1; // default to 1 meal
    let selectedMealKitPrice = 40; // default Kvikkasse price

    // Event listeners for the number of people selection
    personButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedPeople = parseInt(this.value);
            localStorage.setItem("selectedPeople", selectedPeople);
        });
    });

    // Event listeners for the number of meals selection
    mealButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedMeals = parseInt(this.value);
            localStorage.setItem("selectedMeals", selectedMeals);
        });
    });

    // Event listener for the meal kit dropdown
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
    // Retrieve the total sum from localStorage
    const totalSum = localStorage.getItem("totalSum");

    // Set the total sum in the payment input field
    if (totalSum) {
        document.getElementById("totalSum").value = totalSum;
    }
});