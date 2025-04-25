const menu = document.querySelector('#mobile-menu-icon');
const menuLinks = document.querySelector('.navbar_menu');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
});

let count =1;
    document.getElementById("radio1").checked = true;
    setInterval(function(){
        nextImage();
    
    }, 5000);

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}