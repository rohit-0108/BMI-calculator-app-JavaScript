document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var data = {
        name: name,
        email: email,
        phone: phone
    };
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Data stored in local storage");
});


