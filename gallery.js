const mainImage = document.querySelector('.main-images img');
const caption = document.querySelector('.caption');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const thumbs = document.querySelectorAll('.thumb img');

// array الصور الرئيسية
const mainImagesArray = [
    {src: 'images/houda.jpeg', caption: 'Amazing'},
    {src: 'images/houda2.jpg', caption: 'Houda the best'},
    {src: 'images/kiwi.jpg', caption: 'Beautiful'}
    
];

let currentIndex = 0;

function updateMainImage(index){
    mainImage.src = mainImagesArray[index].src;
    caption.textContent = mainImagesArray[index].caption;
}

// الأسهم
rightBtn.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= mainImagesArray.length) currentIndex = 0;
    updateMainImage(currentIndex);
});

leftBtn.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) currentIndex = mainImagesArray.length -1;
    updateMainImage(currentIndex);
});

// click على thumbnails
thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const src = thumb.src;
        const cap = thumb.dataset.caption; // ناخد caption من data-caption
        mainImage.src = src;
        caption.textContent = cap;
    });
});

// نبدأ بالصورة الأولى
updateMainImage(currentIndex);
