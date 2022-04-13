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
 
document.body.addEventListener('dblclick' evt => {
    evt.target.innerHTML=''
})

window.addEventListener('keydown' evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
    }
})

document.body.addEventListener('mousemove' evt => {
    const { clientX, clientY } = evt
    //console.log(`mouse is at ${clientX}, ${clientY}`)
})

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}