function calculateAge() {
    var day = parseInt(document.getElementById("dobDay").value);
    var month = parseInt(document.getElementById("dobMonth").value);
    var year = parseInt(document.getElementById("dobYear").value);
    
    var dob = new Date(year, month - 1, day);
    var today = new Date();
    
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your age is: " + age;
}
