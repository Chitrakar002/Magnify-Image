const container = document.querySelector('.container');
// const image = document.querySelector('.img');
let s = (window.innerWidth-900)/2;
let m = (window.innerHeight-500)/2;
container.addEventListener('mousemove',(e)=>
{

    container.style.backgroundPositionX = `${(e.clientX-s)/10}%`;

    container.style.backgroundPositionY = `${(e.clentY-m)/10}%`;

    // console.log(e);
    // image.style.top = `${(e.clientY)/20}%`;
    // image.style.left = `${(e.clientX)/20}%`;

})