const orders=[];
function render() {
    const form = document.getElementById("inputForm");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //get inputs values
        const fullName = document.getElementById('full-name').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const orderType = [];
        if (document.getElementById('shawarma').checked) orderType.push('Shawarma');
        if (document.getElementById('zinger').checked) orderType.push('Zinger');
        if (document.getElementById('burger').checked) orderType.push('Burger');
        const orderOption = document.querySelector('input[name="orderOption"]:checked')?.value;

        const obj = {}

        orders.push(obj);
        // Save the orders array to local storage
        localStorage.setItem('customerOrders', JSON.stringify(orders));
    

    });
}