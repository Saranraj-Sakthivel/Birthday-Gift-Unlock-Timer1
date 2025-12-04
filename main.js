const days = document.getElementById("days")
const hours = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


function updatedate(){
const birthdate = new Date(`december 5 2025 00:00:00`)
const currentyear = new Date()
const BirthdayDate = birthdate - currentyear;
const d = Math.floor(BirthdayDate / 1000 / 60 / 60 / 24)
const h = Math.floor(BirthdayDate / 1000 / 60 / 60) % 24
const m = Math.floor(BirthdayDate / 1000 / 60) % 60
const s = Math.floor(BirthdayDate / 1000) % 60
// const d=0
// const h=0
// const m=0
//  const s=0
days.innerText=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML =s;
    if(d===0 && h===6 && m===36 && s===0)
    {
        demo()
    }


}
function demo() {
    console.log("🎉 Birthday time! Redirecting to demo page...");
  
    window.location.href = "birthday.html"; // Replace with your birthday page
}
setInterval(updatedate,1000)

