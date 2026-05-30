const BASE_URL = 'https://emegent.esbatech.org';


 const firstname =  document.getElementById('firstname').value.trim(),
 const middlename = document.getElementById('surname').value.trim(),
 const  othername = document.getElementById('othernames').value.trim(),
 const  username = document.getElementById('username').value.trim(),
 const email = document.getElementById('email').value.trim(),
 const tel = document.getElementById('phone').value.trim(),
 const gender = document.getElementById('gender').value,
 const password= document.getElementById('password').value,

 const form =  document.getElementById('form'),
 const errorMsg = document.getElementById('errorMsg'),

 
 const signUp = async (arg) => {
    try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, middlename, othername, username, email, tel, gender, password})
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = '/login.html';
    } else {
      errorMsg.textContent = data.message || 'Signup failed';
    }
  }
    catch (err) {
    errorMsg.textContent = 'Network error. Please try again.';
  }

 }


  form.addEventListener('submit', (e) => {
  e.preventDefault();
  signup();
});