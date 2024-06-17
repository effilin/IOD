import moment from "moment";

function timeNow() {
const currentTime = moment();
document.getElementById('now').innerText=currentTime;
}
timeNow();
 const myBirthday = new Date;
 document.getElementById('birthDay').innerText=myBirthday