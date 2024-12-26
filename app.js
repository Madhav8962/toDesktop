let navDialog =document.getElementById('nav-dialog');
function handlemenu(){
navDialog.classList.toggle('hidden');
}
function setupIntersectionObserver(element,isLTR,speed){
    const intersectionCallback=(entries)=>{
    const isIntersecting=entries[0].isIntersecting;
          console.log(element,isIntersecting);
    if(isIntersecting){
        document.addEventListener('scroll',scrollHandler);
    }else{
        document.removeEventListener('scroll',scrollHandler);
    }
    } ;
    const intersectionObserver=new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
    function scrollHandler(){
        const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;
        element.style.transform=`translateX(${isLTR ? translateX : -translateX}px)`;
    }
}
const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const line4=document.getElementById('line4');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.40);

const dtElements=document.querySelectorAll('dt');
dtElements.forEach(element=>{
    element.addEventListener('click',()=>{
        const ddId=element.getAttribute('aria-controls');
        const ddElement=document.getElementById(ddId);
        const ddArrowIcon=element.querySelectorAll('i')[0];
        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})


