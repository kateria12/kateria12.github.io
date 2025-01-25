let divFon = document.querySelector('.oclock')
let pHour = document.querySelector('.p-hour')
let pDay = document.querySelector('.p-day')

function myTime() {
    let date = new Date()
    console.log(date)

    let hour = date.getHours()
    let hv = date.getMinutes()
    let sknd = date.getSeconds()


    hv = hv < 10 ? '0' + hv : hv
    sknd = sknd < 10 ? '0' + sknd : sknd
    hour = hour < 10 ? '0' + hour : hour


    pHour.innerHTML = hour + ':' + hv + ':' + sknd


    let day = date.getDay()
    let dayName = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', "п'ятниця", 'субота']
    
    let num = date.getDate();
    num = num < 10 ? '0' + num : num;

let mnth = date.getMonth()
let mnthName = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'грудня']

let year = date.getFullYear()

    pDay.innerHTML = dayName[day] + ', '  +  num +' '+ mnthName[mnth] + ' ' + date.getFullYear()



    if (hour >=7 && hour <= 11){
        divFon.style.backroundImage = 'url(img/morning.jpg)'
    }
    else if(hour > 11 && hour < 18){
        divFon.style.backroundImage = 'url(img/day2.jpg)'
    }
    else if(hour > 18 && hour < 20){
        divFon.style.backroundImage = 'url(img/evening.jpg)'
    }
    else if(hour > 20  || hour < 7){
        divFon.style.backroundImage = 'url(img/night.jpg)'
    }

}
myTime();

setInterval(() => {
    myTime();
}, 1000);