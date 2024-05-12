const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
const header = document.getElementById("header");


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');

})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
})
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    
})
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    
})
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("header-colored");
    } else {
        header.classList.remove("header-colored");
    }
});

