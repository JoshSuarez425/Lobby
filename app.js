const img = document.getElementById("dice-img");
const butt = document.getElementById("button");
const ex = document.getElementById("ex");
const butt2 = document.getElementById("button2");
let defaultnum = 6;
let corr = false;
let max = 6;
let min = 1;    
function st(){
   
    
    let numarr = [];
    for(let i = 0;i<defaultnum;i++){
        let ran = Math.floor(Math.random() * 6) + 1;
        numarr.push(`<img src="dice-${ran}.png">`);
        
    }
    img.innerHTML = numarr.join(" ");
   
 

}
function st2() {
    
let pr;

    pr = window.prompt('Enter Number 1-6');
    pr = Number(pr);

            if(pr > max){
            window.alert('6 limit');
            return;

            
        }else if(pr < min){
            window,alert('1 min');
            return;
         
        
        }

   



    defaultnum = pr;

    
}