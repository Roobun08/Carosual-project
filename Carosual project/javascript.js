let slideposition = 0;
const previousbutton = document.querySelector('.previous');
const nextbutton = document.querySelector('.next');
const sliders = document.querySelectorAll('.slider-item');
const length = sliders.length;





function updateposition() {
    sliders.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });

    sliders[slideposition].classList.add('active');
}


previousbutton.addEventListener('click', function () {
    previousslide();
});

nextbutton.addEventListener('click', function () {
    nextslide();
});


function previousslide() {
    if (slideposition == 0) {
        slideposition = length - 1;
    }
    else {
        slideposition--;
    }
    updateposition()
}



function nextslide() {
    if (slideposition == length - 1) {
        slideposition = 0;
    }
    else {
        slideposition++;
    }
    updateposition()
}



setInterval(() => {
    previousslide() ;
}, 2000); 
