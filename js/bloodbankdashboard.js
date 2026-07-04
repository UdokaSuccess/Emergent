const profBtn = document.getElementById("edit-prof-btn");
const groupBtn = document.getElementById("btn");

profBtn.addEventListener("click", event => {
    document.getElementById("edit-prof-sum").style.display="grid";
    document.getElementById("hosp-prof").style.display="none";

});

groupBtn.addEventListener("click", event => {
    document.getElementById("blood-group-form").style.display="block";
});



