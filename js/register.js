const registerBtn =document.getElementById('register-submit')

// console.log(UserName)


registerBtn.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const UserName= document.querySelector('#register-username').value
    const Password= document.querySelector('#register-password').value
    const Email= document.querySelector('#register-email').value
    try{

        const res= await axios.post(" ",{
         UserName,
         Email,
         Password
        })

        console.log(res.data)
    }

   catch(error){
        console.error("error", err.message)
   }
})



console.log("djfdkfjdkfjdkj")