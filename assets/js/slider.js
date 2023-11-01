const slider = {
    imagesElements: [],

    currentPosition: 0,

    init : function(){
        slider.generateSliderImages();
        slider.bindNavigationButton();
    },

    generateSliderImages: function(){
        const sliderImages = ["léva_home.png", "léva_report.png", "léva_back.png"];
        const sliderContainer = document.querySelector('.slider');
        for( const currentImage of sliderImages){
            const newSliderImage = document.createElement("img");
            newSliderImage.src = "asset/img" + currentImage;
            newSliderImage.classList.add("slider__img");
            newSliderImage.alt = "Image du Slider, projet Léva";
            sliderContainer.append(newSliderImage);

            slider.imagesElements.push(newSliderImage);
        }
        slider.goToSlide(0);
        console.log(sliderImages);
    },

    bindNavigationButton: function(){
        const buttonSlider = document.querySelectorAll(".slider__btn");
        const previousButton = buttonSlider[0];
        const nextButton = buttonSlider[1];
        previousButton.addEventListener('click', slider.handlePreviousSlide);
        nextButton.addEventListener('click', this.handleNextSlide);
    },

    handlePreviousSlide: function(){
        const newPosition = slider.currentPosition === 0 ? slider.imagesElements.length -1 : slider.currentPosition-1;

        slider.goToSlide(newPosition);
    },

    handleNextSlide: function(){
        const newPosition = slider.currentPosition === slider.imagesElements.length -1 ? 0 : slider.currentPosition +1;

        slider.goToSlide(newPosition)
    },


    goToSlide: function(newPositon){
        slider.imagesElements[slider.currentPosition].classList.remove("slider__img--current");

        slider.imagesElements[newPositon].classList.add("slider__img--current");

        slider.currentPosition = newPositon;
    },
}
document.addEventListener("DOMContentLoaded", slider.init);