$(document).ready(function() {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;

    const container = $('.slider');
    const track = $('.slider__track');
    const item = $('.slider-item');

    const itemCount = item.length;

    const itemWidth = Math.floor(1354 / slidesToShow);
    // console.log(itemCount);
    const movePosition = (slidesToScroll * itemWidth) + (18 * slidesToScroll);

    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');


    item.each(() => {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(() => {
        const itemsLeft = Math.floor(Math.abs(position) / itemWidth);
        position += (itemsLeft >= slidesToScroll) ? movePosition : itemsLeft * itemWidth;
        track.css({
            transform: `translateX(${position}px)`
        });
        checkBtns();
    });
    btnNext.click(() => {
        const itemsLeft = Math.floor(itemCount - ((Math.abs(position) + slidesToShow * itemWidth) / itemWidth)) + 1;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        track.css({
            transform: `translateX(${position}px)`
        });
        checkBtns();
    });

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemCount - slidesToShow) * itemWidth
        );
    };
    checkBtns();
});