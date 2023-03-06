const counter = document.getElementById('counter')
let num = 0;
document.getElementById('start').addEventListener('click', () => {
    const intervalId = setInterval(() => {
        ++num;
        counter.innerText = num;
    }, 1000)
    document.getElementById('stop').addEventListener('click', ()=> {
        clearInterval(intervalId)
    })
    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(intervalId)
        counter.innerText = '0'
        num = 0
    })
})