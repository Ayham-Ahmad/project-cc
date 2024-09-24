document.addEventListener('DOMContentLoaded', function () {
    const assetForm = document.getElementById('assetForm');
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');
    let editingRow = null; // Track if editing an existing row

    // Add or edit an asset entry
    assetForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const employeeName = document.getElementById('employeeName').value;
        const assetType = document.getElementById('assetType').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        const entryTime = new Date().toLocaleString(); // Automatically set entry time

        if (editingRow) {
            // Update the existing row with new values
            editingRow.cells[0].textContent = employeeName;
            editingRow.cells[1].textContent = assetType;
            editingRow.cells[2].textContent = description;
            editingRow.cells[3].textContent = quantity;
            editingRow.cells[4].textContent = entryTime;
            editingRow = null;
        } else {
            // Add a new row to the table
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${employeeName}</td>
                <td>${assetType}</td>
                <td>${description}</td>
                <td>${quantity}</td>
                <td>${entryTime}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
            inventoryTableBody.appendChild(newRow);
        }

        // Clear the form
        assetForm.reset();

        // Add event listeners for the new row buttons
        addRowEventListeners();
    });

    // Function to add event listeners for edit and delete buttons
    function addRowEventListeners() {
        const editButtons = document.querySelectorAll('.edit-btn');
        const deleteButtons = document.querySelectorAll('.delete-btn');

        // Edit functionality
        editButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const row = button.parentElement.parentElement;
                document.getElementById('employeeName').value = row.cells[0].textContent;
                document.getElementById('assetType').value = row.cells[1].textContent;
                document.getElementById('description').value = row.cells[2].textContent;
                document.getElementById('quantity').value = row.cells[3].textContent;

                editingRow = row; // Set the row being edited
            });
        });

        // Delete functionality
        deleteButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const row = button.parentElement.parentElement;
                row.remove(); // Remove the row from the table
            });
        });
    }

    // Initial call to set up event listeners
    addRowEventListeners();
});
