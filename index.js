document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
const circularCheckBoxes = document.querySelectorAll(".circular-check-box");
const totalAmountContainer = document.querySelector(".total");

// Initialize the total amount
let totalAmount = 0;

function updateTotalAmount(amount) {
  totalAmountContainer.textContent = `Total: $${amount.toFixed(2)} USD`;
}

// Add the click event listener to each checkbox
circularCheckBoxes.forEach(checkBox => {
  checkBox.addEventListener("click", () => {
    // Toggle the 'checked' class on click
    checkBox.classList.toggle("checked");

    const innerCheckBox = checkBox.querySelector(".inner-circular-check-box");
    if (innerCheckBox) {
      innerCheckBox.classList.toggle("checked");
    }
  });
});
  
  let count = 1
  // Loop through each box and add event listeners
  boxes.forEach((box) => {
    const multipleUnitContainer = box.querySelector(".multiple-unit-container");

    // Fill the multiple-unit-container dynamically for each box
    let html = "";
    for (let i = 0; i < count; i++) {
      html += `<div class="unit">
        <div># ${i + 1}</div>
        <div>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
        <div>
          <select>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
          </select>
        </div>
      </div>`;
    }
    count++;
    multipleUnitContainer.innerHTML = html;

    // Toggle the expanded state on click
    box.addEventListener("click", () => {
      box.classList.add("expanded");

       // Get the price of the clicked box
       const priceElement = box.querySelector(".price .fs-28-fw-600");
       const priceText = priceElement.textContent.trim();
       const priceValue = parseFloat(priceText.replace("$", "").replace("USD", ""));
 
       // Update the total amount display with the clicked box's price
       updateTotalAmount(priceValue);
    });
  });
});
