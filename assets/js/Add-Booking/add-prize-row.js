document.getElementById("add-prize-btn").addEventListener("click", function() {
    let prizeList = document.getElementById("prize-list");

    let newRow = document.createElement("div");
    newRow.classList.add("row", "align-items-left", "mb-1");
    newRow.style.padding = "6px";

    let prizeField = document.createElement("div");
    prizeField.classList.add("col-md-9");
    prizeField.innerHTML = `
        <div class="text-start mt-2" style="width:100%; margin-right:0px">
            <label class="form-label">Select Prize</label>
            <select class="form-control" required="" style="color: #232323;">
                <option value="12">Car</option>
                <option value="13">Bike</option>
                <option value="14">Juicer</option>
            </select>
        </div>`;

    let quantityField = document.createElement("div");
    quantityField.classList.add("col-md-3");
    quantityField.innerHTML = `
        <div class="text-start mt-2" style="width:100%; margin-right:12px">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control">
        </div>`;

    let removeButtonWrapper = document.createElement("div");
    removeButtonWrapper.classList.add("col-md-12", "text-end", "mt-2"); // Remove button now takes full width

    let removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function() {
        newRow.remove();
    });

    removeButtonWrapper.appendChild(removeButton);

    newRow.appendChild(prizeField);
    newRow.appendChild(quantityField);
    newRow.appendChild(removeButtonWrapper); // Placing remove button below

    prizeList.appendChild(newRow);
});