import './less/index.less'

// Your code goes here!
console.log('Hello World');
window.onload = function (evt) {
    console.log(`event ${evt.type}fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textcontent = 'READY TO GO!!'

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })

    })
    document.body.addEventListener('click', evt => {
        evt.target.claslist.toggle('mirror')
    })
}
 const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}