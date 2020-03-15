export default class Slider {
    constructor(id) {
        this.$sliderContainer = document.querySelector(`#${id}`);
        this.$nextButton = document.querySelector(`#${id} #next`);
        this.$prevButton = document.querySelector(`#${id} #prev`);
        this.$slides = document.querySelectorAll(`#${id} > .slider__wrap > ul > li`);
    }

    getCurrentSlide() {
        return this.$sliderContainer.querySelector(`.active`);
    }

    getNextSlide(currentSlide) {
        return currentSlide.nextElementSibling ? currentSlide.nextElementSibling : this.$slides[0];
    }

    getPrevSlide(currentSlide) {
        return currentSlide.previousElementSibling ? currentSlide.previousElementSibling : this.$slides[this.$slides.length - 1];
    }

    toggleActiveSlide(prev, next) {
        prev.classList.remove('active');
        next.classList.add('active');
    }

    nextSlide() {
        const currentSlide = this.getCurrentSlide();
        const prevSlide = this.getPrevSlide(currentSlide);
        const nextSlide = this.getNextSlide(currentSlide);
        const rightSlide = this.getNextSlide(nextSlide);

        prevSlide.classList.remove('left');
        currentSlide.classList.add('left');

        nextSlide.classList.remove('right');
        rightSlide.classList.add('right');

        this.toggleActiveSlide(currentSlide, nextSlide);

        const $spanCurrentSlideNum = this.$sliderContainer.querySelector('.slider__current-slide');
        const currentSlideNum = +$spanCurrentSlideNum.innerHTML + 1 > this.$slides.length ? 1 : +$spanCurrentSlideNum.innerHTML + 1;
        $spanCurrentSlideNum.innerHTML = currentSlideNum;
    }

    previousSlide() {
        const currentSlide = this.getCurrentSlide();
        const prevSlide = this.getPrevSlide(currentSlide);
        const nextSlide = this.getNextSlide(currentSlide);
        const leftSlide = this.getPrevSlide(prevSlide);

        nextSlide.classList.remove('right');
        currentSlide.classList.add('right');

        prevSlide.classList.remove('left');
        leftSlide.classList.add('left');

        this.toggleActiveSlide(currentSlide, prevSlide);

        const $spanCurrentSlideNum = this.$sliderContainer.querySelector('.slider__current-slide');
        const currentSlideNum = +$spanCurrentSlideNum.innerHTML - 1 < 1 ? this.$slides.length : +$spanCurrentSlideNum.innerHTML - 1;
        $spanCurrentSlideNum.innerHTML = currentSlideNum;
    }

    handleSwipe() {
        let positionX = null;
        let positionY = null;

        const handleStart = (e) => {
            positionX = e.changedTouches[0].screenX;
            positionY = e.changedTouches[0].screenY;
        };

        const handleEnd = (e) => {
            if (e.changedTouches[0].screenX - positionX > 90 &&
                e.changedTouches[0].screenY - positionY < 200 &&
                e.changedTouches[0].screenY - positionY > -200) {
                this.previousSlide();
            }

            if (e.changedTouches[0].screenX - positionX < -90 &&
                e.changedTouches[0].screenY - positionY < 200 &&
                e.changedTouches[0].screenY - positionY > -200) {
                this.nextSlide();
            }

            positionX = null;
            positionY = null;
        };

        this.$sliderContainer.addEventListener("touchstart", handleStart);
        this.$sliderContainer.addEventListener("touchend", handleEnd);
    }

    hideSlideInfo() {
        this.$sliderContainer.addEventListener('click', (e) => {
            const target = e.target;
            if (!target.classList.contains('slider-item__button-hide')) {
                return;
            }
            target.innerHTML = target.innerHTML === 'скрыть' ? 'показать' : 'скрыть';
            target.nextElementSibling.classList.toggle('hide');
        });
    }

    init() {
        this.$slides[0].classList.add('active');
        this.$slides[1].classList.add('right');
        this.$slides[this.$slides.length - 1].classList.add('left');

        this.$prevButton.addEventListener('click', this.previousSlide.bind(this));
        this.$nextButton.addEventListener('click', this.nextSlide.bind(this));

        this.$sliderContainer.querySelector('.slider__current-slide').innerHTML = 1;
        this.$sliderContainer.querySelector('.slider__all-slides').innerHTML = this.$slides.length;

        this.hideSlideInfo();

        this.handleSwipe();
    }
}