document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("generalSearch");
    const tableBody = document.getElementById("tableBody");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));
    const rowsPerPage = 10; // Row per page
    let currentPage = 1;

    function filterTable() {
        const query = searchInput.value.toLowerCase();
        const filteredRows = rows.filter(row => {
            return row.innerText.toLowerCase().includes(query);
        });

        renderTable(filteredRows, currentPage);
    }

    function renderTable(filteredRows, page) {
        tableBody.innerHTML = "";
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedRows = filteredRows.slice(start, end);

        paginatedRows.forEach(row => tableBody.appendChild(row));

        renderPagination(filteredRows.length);
    }

    function renderPagination(totalRows) {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;
            btn.classList.add("btn", "btn-sm", "btn-primary", "mx-1");
            if (i === currentPage) btn.classList.add("active");
            btn.addEventListener("click", function () {
                currentPage = i;
                filterTable();
            });
            paginationContainer.appendChild(btn);
        }
    }

    searchInput.addEventListener("input", () => {
        currentPage = 1;
        filterTable();
    });

    filterTable();
});
