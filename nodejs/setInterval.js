let time = 0;

let timer = setInterval(function() {
    console.log(`${time+=2} seconds have passed`);
    if(time >= 6){
        clearInterval(timer);
    }
}, 2000);