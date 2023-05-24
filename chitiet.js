var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')


var currentIndex = 0;
function updateImageByIndex(index)
{
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })

    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        updateImageByIndex(index)
        // imgFeature.src = e.target.getAttribute('src')
    })
})