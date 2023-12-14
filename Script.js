//Last modified date & data collection date
onload = function() {
    document.getElementById("datelastModified").innerHTML = "Last updated :  " +
      new Date(document.lastModified).toLocaleDateString('in');

    var currentDate = new Date();
      document.getElementById("dataCollectionDate").innerHTML = "Data Collection : " +
          currentDate.toLocaleDateString('in');
  }

//Log-in confirmation
  function validateLogIn() {
    var email = document.getElementById('user-email').value;
    var password = document.getElementById('user-pass').value;

    if (email && password) {
        if (confirm("Confirm login?")) {
            alert("Login successful!");
            openPopupWindowHOME();
        } 
        else {
            alert("Login canceled.");
        }
    } 
    else {
        alert("Please fill in all fields.");
    }
}

//Once Logged-in, redirect to homepage
function openPopupWindowHOME() {
    var popup = window.open("Homepage.html","_blank");
    if (popup) {
        popup.focus();
    } 
    else {
        // If the browser blocks popups
        alert("Popup blocked. Please allow popups for this site.");
        window.location.href = "Homepage.html";
    }
}

//Sign-up confirmation
function validateSignUp() {

    var firstName = document.getElementById('newFname').value;
    var lastName = document.getElementById('newLname').value;
    var DOB = document.getElementById('newDOB').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPass').value;
    var conPassword = document.getElementById('confirmPass').value;

    var passwordsMatch = newPassword === conPassword;

    if (firstName && lastName && DOB && newEmail && newPassword && conPassword) {
        if (passwordsMatch) {
            if (confirm("Confirm information?")) {
                alert("Account created successfully! Please log in to your account.");
                openPopupWindowLOGIN();
            } 
            else {
                alert("Account creation cancelled.")
            }
        } 
        else {
            alert("Password confirmation incorrect. Please try again.");
        }
    } 
    else {
        alert("Please fill in all required fields.")
    }

    return false;
}

//Once new account created redirect to log-in page
function openPopupWindowLOGIN(){
    var popup = window.open("Log_in.html", "_blank");
    if (popup) {
        popup.focus();
    }
    else {
        alert("Popup blocked. Please allow popups for this site.");
        window.location.href = "Log_in.html";
    }
}

//Contact recieved
function contactReceived(){
    var contName = document.getElementById('contactName').value;
    var contEmail = document.getElementById('contactMail').value;
    var msg = document.getElementById('contactMsg').value;

    if (contName && contEmail && msg) {
        if (confirm("Send message?")){   
            alert("Message sent!");
            alert("We will be in touch within 5 working days after your message is received!");
        }
    }
}