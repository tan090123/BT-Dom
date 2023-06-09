const range = document.querySelector('.range');
const rangeContent = document.querySelector('.range__content');
const rangeSlider = document.querySelector('body');
const rangeValue = document.querySelector('.range__content span');
console.log(range);

function updateRangeValue() {
    const value = getRangeValue();
    rangeValue.textContent = value + '%';
    const background = `rgba(0, 0, 0, ${value / 100})`;
    rangeSlider.style.background = background;
}

function moveRangeSlider(event) {
    const rangeWidth = range.offsetWidth;
    const offsetLeft = range.offsetLeft;
    const pointerPosition = event.clientX - offsetLeft;

    
    if (pointerPosition >= 0 && pointerPosition <= rangeWidth) {
        rangeContent.style.width = pointerPosition + 'px';
        updateRangeValue();
    }
}

function getRangeValue() {
    const rangeWidth = range.offsetWidth;
    const rangeContentWidth = rangeContent.offsetWidth;
    const percentage = (rangeContentWidth / rangeWidth) * 100;
    return Math.round(percentage);
}

range.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', moveRangeSlider);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', moveRangeSlider);
});

window.addEventListener('resize', updateRangeValue);
updateRangeValue();
