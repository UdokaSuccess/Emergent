 const BASE_URL = 'https://emergent.esbatech.org';

 const form =  document.getElementById('form');
 const errorMsg = document.getElementById('errorMsg');

 
 const signUp = async (arg) => {
  const userData =  document.getElementById('userData').value.trim();
 const password= document.getElementById('password').value;

    try {
    const response = await fetch(`${BASE_URL}/login.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  userData, password})
    });

    const data = await response.json()
    if (data.code === '200') {
          localStorage.setItem('token', data.msg.token);
          localStorage.setItem('username', data.msg.username)
          localStorage.setItem('userId', data.msg.id);
          localStorage.setItem('tel', data.msg.tel);
          
      window.location.href = '../pages/userDashboard.html';
    } else {
      errorMsg.textContent = data.message || 'Failed to login';
    }
  }
    catch (err) {
    errorMsg.textContent = 'Network error. Please try again.';
  }

 }


  form.addEventListener('submit', (e) => {
  e.preventDefault();
  signUp();
});