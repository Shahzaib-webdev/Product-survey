const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;
const submitButton = document.getElementById('submiBtn').value;

function submitFeedback(){
    alert("Thank you for your feedback.");
}



submitButton.onclick = submitFeedback;