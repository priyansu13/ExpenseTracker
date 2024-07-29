const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalAmountElement = document.getElementById('totalAmount');

let totalAmount = 0; 

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount.toFixed(2)}</td>
        `;

        expenseList.appendChild(newRow);

        totalAmount += amount;
        totalAmountElement.textContent = totalAmount.toFixed(2);

        document.getElementById('description').value = "";
        document.getElementById('category').value = "";
        document.getElementById('amount').value = "";
    } else {
        alert('Please fill out all fields with valid data');
    }
});
