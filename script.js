// console.log("Script loaded");
// let title=document.getElementById('title');
// console.log(title.innerText);
// title.innerText='have a good day'
// console.log(title.innerText)
// title.innerHTML="<h1>hey there</h1> "
// console.log(title.innerText)
// title.style.backgroundColor='red'


// let red=document.getElementById('red')
// let yellow=document.getElementById('yellow')
// let green=document.getElementById('green')

// red.onclick=()=>console.log('you clicked red')
// yellow.onclick=()=>console.log('you clicked yellow')
// green.onclick=()=>console.log('you clicked green')


// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)
let square=document.querySelectorAll('.colorsquare')
console.log(square[2].value)

const timesclicked={'red':0,'yellow':0,'green':0,'blue':0}
square.forEach(s=>{
  s.onclick=()=>{
    timesclicked[s.value]+=1
    s.innerHTML=timesclicked[s.value]
  }
})



function cleargame1(){
  timesclicked.red=0;
  timesclicked.yellow=0;
  timesclicked.green=0;
  timesclicked.blue=0;
  square.forEach(s=>
    s.innerText='')
}

const cleargame=document.getElementById('clear')
cleargame.onclick=()=>cleargame1()



