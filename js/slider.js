document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const slideNumber = document.getElementById('slideNumber');
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.classList.add('slider-indicators');

    let currentSlide = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        slideNumber.textContent = `${currentSlide + 1}/${slides.length}`;
        updateIndicators();
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === slides.length - 1;
    }

    function createIndicators() {
        for (let i = 0; i < slides.length; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.dataset.index = i;
            indicator.addEventListener('click', () => {
                currentSlide = parseInt(indicator.dataset.index);
                updateSlider();
            });
            indicatorsContainer.appendChild(indicator);
        }
        document.querySelector('.slider-controls').appendChild(indicatorsContainer);
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentSlide) {
                indicator.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    createIndicators();
    updateSlider();
});