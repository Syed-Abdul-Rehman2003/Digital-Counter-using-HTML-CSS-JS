const btndec=document.querySelector('#Decrement');
const btninc=document.querySelector('#Increment');
const btnres=document.querySelector('#Reset');
const num=document.querySelector('#title');
let currval=0;
btninc.addEventListener("click",()=>{
    currval=currval+1;
    num.textContent=currval;
})
btnres.addEventListener("click",()=>{
    currval=0;
    num.textContent=currval;
})
btndec.addEventListener("click",()=>{
    currval=currval-1;
    num.textContent=currval;
})

btnres.addEventListener("click",()=>{
    const Conf = confirm("Are you sure you want to reset?");
    if (Conf){
        currval=0;
        num.textContent=currval;
    }
})