//array of customers order objects
const orders=[];

//object constructor function
function Customer(name, pass, bdate, gender, phone, orderType, orderOption, image) {
    this.name = name;
    this.pass = pass;
    this.bdate = bdate;
    this.gender = gender;
    this.phone = phone;
    this.orderOption= orderOption;
    this.orderType= orderType;
    this.image=image;
}


function render() {
    const form = document.getElementById("inputForm");
    //form lisiener
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //get inputs values
        const fullName = document.getElementById('full-name').value;
        const password = document.getElementById('pass').value;
        const bdate = document.getElementById('bdate').value;
        const gender = document.getElementById('gen').value;
        const phone = document.getElementById('phone').value;
        const orderType = document.querySelectorAll('input[name=orderType]:checked').value;
        const orderOption = document.querySelector('input[name="orderOption"]:checked')?.value;
        const image = `./img.png`;
        const email =document.getElementById('email').value;

        const nameRegex = /^\S+$/; // No spaces allowed
        const passwordRegex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/
        const phoneRegex = /^07\d{8}$/; // Starts with 07 and 10 digits
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

        // Validation checks
        if (!nameRegex.test(fullName)) {
            alert("Username must not contain spaces.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email format");
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Phone number must start with 07 and be 10 digits long.");
            return;
        }

        

        //create new object to each customer
        const obj = new Customer(fullName, password, bdate, gender, phone, orderType, orderOption, image);
        //add the order object to the orders array
        orders.push(obj);
        // Save the orders array to local storage
        localStorage.setItem('customerOrders', JSON.stringify(obj));

        //create a card
        let container= document.getElementById("customer-container");
        const card=document.createElement("div");
        card.setAttribute("class", "card");
      
        let order=JSON.parse(localStorage.getItem("customerOrders"));

        // Add customer information to the card
        card.innerHTML = `
            <img src="${order.image}" alt="${order.fullName}" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
            <h5>${order.fullName}</h5>
            <p><strong>DOB:</strong> ${order.bdate}</p>
            <p><strong>Gender:</strong> ${order.gender}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Order Type:</strong> ${order.orderType}</p>
            <p><strong>Order Option:</strong> ${order.orderOption}</p>
        `;
        container.appendChild(card);


    });
}

// // Initialize the render function
render();
