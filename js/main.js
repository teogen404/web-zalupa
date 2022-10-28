let wasOpen = 1;
function openMenu(){
    document.getElementById("sidebar").classList.toggle('active');
    document.querySelector('.header__list').classList.toggle('active');
    wasOpen++;
}
let element = document.getElementById("idn1");

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let elementEnd = element.offsetHeight - 75;
    if(scrollTop >= elementEnd && wasOpen % 2 == 0){
        document.getElementById("sidebar").classList.remove('active');
        document.querySelector('.header__list').classList.remove('active');
    }
    if(scrollTop <= elementEnd && wasOpen % 2 == 0){
        document.getElementById("sidebar").classList.add('active');
        document.querySelector('.header__list').classList.add('active');
    }
});
