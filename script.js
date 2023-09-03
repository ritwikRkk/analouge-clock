let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

const timer = () => {
    d= new Date();
    let htime= d.getHours();
    let mtime= d.getMinutes();
    let stime= d.getSeconds();

    hrotation= 30*htime + mtime/2 + stime/120;
    mrotation= 6*mtime + stime/10;
    srotation= 6*stime;

    hour.style.transform= `rotate(${hrotation}deg)`;
    min.style.transform= `rotate(${mrotation}deg)`;
    sec.style.transform= `rotate(${srotation}deg)`;
}

setInterval(timer, 1000);