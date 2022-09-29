const count = document.getElementById('count')
const btns = document.querySelectorAll('.btn')

let label = 0

count.innerText = label 

btns[0].onclick = () => {
    label -= 1
    count.innerText = label
}

btns[1].onclick = () => {
    label += 1
    count.innerText = label
}