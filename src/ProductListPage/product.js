var filterbtn = document.querySelector('.filter-btn');
var aside = document.querySelector('.aside');
var toggler = document.querySelector('.toggler');
console.log(document.body.clientWidth);
alterClass();
function alterClass(){
    console.log("alter called")
    if(document.body.clientWidth <= 800){
        console.log("a",document.body.clientWidth);
        filterbtn.style.visibility ="visible";
        toggler.style.visibility ="hidden";
        aside.style.visibility ="hidden";
        toggler.addEventListener('click',()=>{
            
            aside.style.transition= "0.5s";
            aside.style.visibility ="hidden";
            toggler.style.visibility ="hidden";
        })
        filterbtn.addEventListener('click',()=>{
            
            aside.style.transition= "0.5s";
            aside.style.visibility ="visible";
            toggler.style.visibility ="visible";
        })
    }
    else{
        filterbtn.style.visibility ="hidden";
        toggler.style.visibility ="hidden";
        aside.style.visibility ="visible";
    }
}

/**
 * on resize of screen manage the aside navigation bar 
 */
document.body.onresize(()=>{
    alterClass();
})