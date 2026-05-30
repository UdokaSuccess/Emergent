 const BASE_URL = 'https://emergent.esbatech.org';


const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
const username = localStorage.getItem('username');


if (!token) {
  window.location.href = '../pages/login.html';
}

document.getElementById('username').textContent = username;

const getProfile = async () => {
  try {
    const response = await fetch(`${BASE_URL}/profile.php?id=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.code === '200') {
      populateDashboard(data.msg);
    } else {
      console.log(data.msg);
    }

  } catch (err) {
    console.log('Network error', err);
  }
}

const populateDashboard = (user) => {
  document.getElementById('fullname').textContent = `${user.firstname} ${user.lastname}`;
  document.getElementById('dob').textContent = user.dob;
  document.getElementById('bloodtype').textContent = user.blood_type;
  document.getElementById('phone').textContent = user.tel;
  document.getElementById('email').textContent = user.email;

  // initials avatar
  const initials = `${user.firstname[0]}${user.lastname[0]}`.toUpperCase();
  document.getElementById('avatar').textContent = initials;
}