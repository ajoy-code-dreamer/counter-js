// =========== counter js ===========
let counting = document.querySelectorAll('.counting');
let counterItemArray = Array.from(counting);

counterItemArray.map((item)=>{
    let counterNumber = item.innerHTML;
    let counterStart = 0;
    item.innerHTML = "0";
    function counterJs(){
        counterStart++;
        item.innerHTML = counterStart;
        if(counterStart == counterNumber){
            clearInterval(counterInterval);
            console.log('done')
        }
    }
    let counterInterval = setInterval(()=>{
        counterJs();
    },500/20)

})



// =========== counter js ===========