const btn = document.querySelector('.btn')
const container = document.querySelector('body')

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
}