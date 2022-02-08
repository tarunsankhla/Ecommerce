var banner = document.querySelectorAll('.banner');
console.log(banner)
banner.forEach((i)=>{
    
    i.addEventListener('click',()=>{
        console.log('click')
        this.location.href ='./src/ProductListPage/productListPage.html';
    })
   
})