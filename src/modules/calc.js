function scrollAnimation(){
    let windowScreen = window.screen.height,
    windowScroll = document.documentElement.scrollTop;
document.addEventListener('scroll',()=>{
    
    document.addEventListener('scroll', (e)=>{
        if(windowScroll < document.documentElement.scrollTop && document.documentElement.scrollTop < windowScreen && !document.querySelector('.header').classList.contains('active')){
            document.querySelector('.header').classList.add('active');
            document.querySelector('.nav').classList.add('active');
            document.querySelector('.header-title').classList.add('active');
        }
        else if(document.querySelector('.header').classList.contains('active') && document.documentElement.scrollTop == 0 && windowScroll > document.documentElement.scrollTop){
            document.querySelector('.header').classList.remove('active');
            document.querySelector('.nav').classList.remove('active');
            document.querySelector('.header-title').classList.remove('active');
        }
        windowScroll = document.documentElement.scrollTop;
    });
});
}



export default scrollAnimation();