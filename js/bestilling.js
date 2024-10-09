'use strict;'


//ORDER 


// Function to add one item to the cart for a specific product
function addToCart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;

    updateTotalPrice(product); // opdater totalsum
}

// Update the total price
function updateTotalPrice(product) 
{
    const quantityElement = document.getElementById(product);
    const priceElement = document.getElementById(product + '-price');
    const totalElement = document.getElementById(product+ '-total');

    if ( quantityElement && priceElement && totalElement ) {
        const quantity = parseInt(quantityElement.value);
        const price = parseInt(priceElement.value);
        const total = quantity * price;

        totalElement.value = total;

        // opdater bestilling javascript objektet order -> se linje 1
        order[product].quantity = quantity;
        order[product].totalPrice = total;
        checkoutTotalPrice('onePerson', 'twoPeople', 'threePeople', 'fourPeople', 'oneMeal', 'twoMeals', 'threeMeals',
            'fourMeals', 'fiveMeals'
        );
    }
}