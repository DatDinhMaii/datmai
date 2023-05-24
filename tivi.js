// function updateInput(thisInput, thisSliderPointClass, otherInputClass, step, htmlValueClass, isLower) {
//   const pointWidth = 18;
//   const sliderRange = thisInput.parentNode.querySelector('.slider-range');
//   const otherInputValue = thisInput.parentNode.querySelector(`.${otherInputClass}`).value;
  
//   if (isLower) {
//     thisInput.value = Math.min(thisInput.value, otherInputValue - step);
//     sliderRange.style.left = thisInput.value + '%';    
//   } else {
//     thisInput.value = Math.max(thisInput.value, otherInputValue - (-step));
//     sliderRange.style.right = (10000 - thisInput.value) + '%';
//   }
  
//   const thisPoint = thisInput.parentNode.querySelector(`.${thisSliderPointClass}`);
//   thisPoint.style.left = thisInput.value + '%';
//   thisPoint.style.transform = 'translateX(-' + ((thisInput.value/10) * pointWidth) + 'px)';
  
//   document.getElementsByClassName(htmlValueClass)[0].innerHTML = thisInput.value;
// }



// const rangeInput = document.querySelectorAll(".range-input input"),
// priceInput = document.querySelectorAll(".price-input input"),
// range = document.querySelector(".slider .progress");
// let priceGap = 1000;

// priceInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minPrice = parseInt(priceInput[0].value),
//         maxPrice = parseInt(priceInput[1].value);
        
//         if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minPrice;
//                 range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             }else{  
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });

// rangeInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);

//         if((maxVal - minVal) < priceGap){
//             if(e.target.className === "range-min"){
//                 rangeInput[0].value = maxVal - priceGap
//             }else{
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         }else{
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });




const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
        
        if((maxVal - minVal >= priceGap) && maxVal <= 10000){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{  
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});











