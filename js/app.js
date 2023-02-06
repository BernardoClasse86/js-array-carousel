console.log('hello')

const slides = ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg']


// GET elements from HTML

let slideElements = document.querySelectorAll('.slide-thumb')
console.log(slideElements)

const leftSlideElement = document.querySelector('.arrow-left')
console.log(leftSlideElement)

const rightSlideElement = document.querySelector('.arrow-right')
console.log(rightSlideElement)

// ADD THE INCREASE VALUE FOR SLIDING SLIDERS

// increase
let slideCounter = 0

// WHEN I click on right arrow i get to the next element
rightSlideElement.addEventListener('click', function () {
    console.log('current slide', slideCounter)

    // WHEN i get to the last element of the slideElement it doesn't increase anymore

    if (slideCounter < 4) {

        // click = 0 
        let actualSlide = slideElements[slideCounter]

        // removing class active from the active element
        actualSlide.classList.remove('active-slide')

        // click + 1
        slideCounter += 1 

        // click = 1 of 4
        let nextSlide = slideElements[slideCounter]

        // adding class active to the next element
        nextSlide.classList.add('active-slide')

        console.log('next slide', slideCounter)

    }

})

// WHEN I click on left arrow i get to the previous element

leftSlideElement.addEventListener('click', function () {
    console.log('current slide', slideCounter)

    // WHEN i get to the first element of the slideElement is doesn't decrease anymore

    if (slideCounter > 0) {

        // click = 0
        let actualSlide = slideElements[slideCounter]

        // removing class active from the active element
        actualSlide.classList.remove('active-slide')

        // click - 1
        slideCounter -= 1 

        // click = -1 of 4
        let previousSlide = slideElements[slideCounter]

        // adding class active to the next element
        previousSlide.classList.add('active-slide')

        console.log('previous slide', slideCounter)

    }

})

