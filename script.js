let hr = 0
let min =0
let sec =0
let count = 0

let timer = false // tells timmer is stop 






let x =document.getElementById("start")
let y =document.getElementById("stop")
let z =document.getElementById("reset")

x.addEventListener("click",start)
y.addEventListener("click",stop)
z.addEventListener("click",reset)

function start(){
    timer = true
    stopWatch();
}


function stop(){
    timer = false
   
}



function reset(){
    timer = false
    hr = 0
    min =0
    sec =0
    count = 0
    document.getElementById("hr").innerHTML=0
    document.getElementById("min").innerHTML=0
    document.getElementById("sec").innerHTML=0
    document.getElementById("count").innerHTML=0
}


function stopWatch(){
if(timer == true){
count = count+1

if(count == 100){
    sec = sec+1
    count =0
}
if(sec == 60){
    min = min+1
    sec  =0
}

if(hr == 60){
    hr = hr+1
    min = 0
    sec = 0
}

document.getElementById("sec").innerHTML = sec
document.getElementById("min").innerHTML = min
document.getElementById("hr").innerHTML = hr
document.getElementById("count").innerHTML = count

    setTimeout("stopWatch()",1)
}

}