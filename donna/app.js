const donnaPicture = document.getElementById('donna')
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const donnaDescription = document.querySelector('.description')
const pictures = ['donna1.jpg', 'donna5.jpg', 'donna3.jpg', 'donna4.jpg']
const descriptions = [
    'Donna loves going on walks', 
    'Donna is a ferocious girl',
    'Donna loves to watch movies (her favourite movie is Joker (2019)',
    'Donna HATES wearing hats'
]

let currentPicture = 0

leftButton.addEventListener('click', changePicture)
rightButton.addEventListener('click', changePicture)

function changePicture() {
    if (this.classList.contains('right')) {
        if (currentPicture + 1 < pictures.length) {
            currentPicture++
        }
        else {
            currentPicture = 0
        }
    }
    else if (this.classList.contains('left')) {
        if (currentPicture - 1 >= 0) {
            currentPicture--
        }
        else {
            currentPicture = pictures.length - 1
        }
    }
    donnaPicture.src = pictures[currentPicture]
    donnaDescription.innerHTML = descriptions[currentPicture]

}
