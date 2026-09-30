let transactions = [];

function addTransaction() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;

    // Check input
    if (name === "" || amount <= 0 || date === "") {
        alert("Please enter all details");
        return;
    }

    // Create transaction
    let transaction = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category,
        date: date,
        type: type
    };

    // Add to array
    transactions.push(transaction);

    // Update screen
    displayTransactions();

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}


function displayTransactions() {

    let list = document.getElementById("transactionList");

    list.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(function(transaction) {

        // Calculate
        if (transaction.type === "income") {
            income = income + transaction.amount;
        } else {
            expense = expense + transaction.amount;
        }

        // Create list
        let item = document.createElement("li");

        item.className = transaction.type;

        item.innerHTML =
            "<div>" +
            "<strong>" + transaction.name + "</strong><br>" +
            transaction.category + " | " +
            transaction.date +
            "</div>" +

            "<div>" +
            "₹" + transaction.amount +
            "</div>";

        list.appendChild(item);
    });

    // Balance
    let balance = income - expense;

    document.getElementById("income").innerText =
        "₹" + income;

    document.getElementById("expense").innerText =
        "₹" + expense;

    document.getElementById("balance").innerText =
        "₹" + balance;
}