const listBox = document.querySelectorAll('.swiper-slide');
const wrapperBox = document.querySelector('.container__spm-sp');
const btnLeft = document.querySelector('.prevv');
const btnRight = document.querySelector('.nextt');
const reviewDiv = document.querySelector('.review');

document.addEventListener('DOMContentLoaded', function () {
    // responsive
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1230) {
            make_slide(5);
        } else if (window.innerWidth >= 990) {
            make_slide(4);
        }   
         else if (window.innerWidth >= 750) {
        make_slide(3);
         }
         else if (window.innerWidth >= 510) {
            make_slide(2); }
          else {
            make_slide(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1230px)'),
        window.matchMedia('(min-width: 990px)'),
        window.matchMedia('(min-width: 750px)'),
        window.matchMedia('(min-width: 510px)'),
    ];

    if (media[0].matches) {
        make_slide(5);
    } else if (media[1].matches) 
    {
        make_slide(4);
    } 
    else if (media[2].matches) 
    {
        make_slide(3);
    } 
    else if (media[3].matches) 
    {
        make_slide(2);
    } 
    else {
        make_slide(1);
    }
});     

function make_slide(amountSlideAppear) {
    // set width and margin for item slide
    const widthItemAndMargin = reviewDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;

    // listBox.forEach((element) => {
    //     element.style.marginRight = '20px';
    //     element.style.width = `${widthItemAndMargin - 20}px`; }
    // );

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    wrapperBox.style.transform = `translateX(0px)`; 
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
}




// var swiper = new swiper(".container__spm-sp", {
//     slidesPerView: 5,
//     centeredSlides: true,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       1230: {
//         slidesPerView: 5,
//         slidesPerGroup: 1,
//       },
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     navigation: {
//       nextEl: "nextt",
//       prevEl: "prevv",
//     },
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//   });
 