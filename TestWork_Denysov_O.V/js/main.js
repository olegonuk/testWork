document.addEventListener('DOMContentLoaded', function(event) {
    
/* Popup */

    let btnOpen = document.getElementById('btn-open');
    let btnClose = document.getElementById('btn-close');
    let blockPopup = document.querySelector('.block_popup');


    function openPopup () {
        blockPopup.classList.add('open');
    };

    function closePopup () {
        blockPopup.classList.remove('open');
    };

    btnOpen.addEventListener('click', openPopup);
    btnClose.addEventListener('click', closePopup);

/* Слайдер команда*/
        
    var btnLeft = document.querySelector('.btn-slider-left');
        btnLeft.disabled = true;
    var btnRight = document.querySelector('.btn-slider-right');

    var slider = document.querySelector('.slider-item-wrapper');
    var step = 0;


    function sliderLeft () {
        step = step + 271;
        btnRight.disabled = false;
        if (step >= 0){
            btnLeft.disabled = true;
        }
        slider.style.marginLeft = step + 'px';  
    }

    function sliderRight () {
        step = step -271;
        btnLeft.disabled = false;
        if (step <= -1084){
            btnRight.disabled = true;
        }
        slider.style.marginLeft = step + 'px';  
    }

    btnLeft.addEventListener('click', sliderLeft);
    btnRight.addEventListener('click', sliderRight);

});