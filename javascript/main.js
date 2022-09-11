const navBtn = document.querySelector(".navbar__icons")
const menuBar = document.querySelector(".navbar__items")

// nav icon click 
navBtn.addEventListener('click', ()=>{
    menuBar.classList.toggle('navbar__open')
    navBtn.classList.toggle("open")
})

//scroll
const menuTop = document.querySelector('.top')
window.addEventListener('scroll', ()=>{
    const x = this.pageYOffset;
    if(x>80){
        menuTop.classList.add('active');
    }
    else{
        menuTop.classList.remove('active')
    }
})

//menu content
const menuTitle = document.querySelector(".menu__items");
menuTitle.addEventListener('click', (x)=>{
    if(x.target.classList.contains('menu__item')){
        const Target = x.target.getAttribute("data-title");
        // console.log(Target);
        menuTitle.querySelector('.active').classList.remove('active');
        x.target.classList.add('active');

        const menuItem = document.querySelector('#menu');
        menuItem.querySelector('.menu__item-contents.active').classList.remove('active');
        menuItem.querySelector(Target).classList.add('active')
    }
})

//btn next-prev
const btnNext = document.querySelector('.btn__next');
const btnPrev = document.querySelector('.btn__prev');
const contentItems = document.querySelector('.team__items');
const contentItem = document.querySelectorAll('.team__item');
const team = document.querySelector('.team');
const wrap = document.querySelector('.team__wrap')

//lấy width và length
const itemWidth = team.offsetWidth;
const itemLength = contentItem.length;
// console.log("width", itemWidth, itemLength)

let positionX = 0;
let index = 0;
next = ()=>{
    handleChangeContent(1)
}

prev = ()=>{
    handleChangeContent(-1)
}

handleChangeContent = (direction)=>{
    if(direction === 1){
        if(index >= itemLength - 1) {
            index = itemLength - 1;
            return;
        }
        positionX = positionX - itemWidth;
        console.log('posi', positionX);
        contentItems.style = `transform: translateX(${positionX}px)`;
        index++;
    }else if(direction === -1){
        if(index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + itemWidth;
        console.log('posi', positionX);
        contentItems.style = `transform: translateX(${positionX}px)`;
        index--
    }
}