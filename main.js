// let's start coding:

window.addEventListener('DOMContentLoaded',function(){
    
    // create element
    document.getElementById('create-element').addEventListener('click',function(){
        const timeDiv = document.createElement('div')
        timeDiv.className = 'time'
        const currentTime = String(new Date)
        timeDiv.textContent = currentTime
        document.querySelector('.right').appendChild(timeDiv)
    })

    // reset  效能最差的 開發上快 
    document.getElementById('reset-inner-html').addEventListener('click',function(){
        document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
    })

    // remove element
    document.getElementById('remove').addEventListener('click',function(){
        const lastTime = document.querySelector('.time:last-child')
        lastTime.remove()

    })

    // insert element
    document.getElementById('create-element-insert-adjacent').addEventListener('click',function(){
        const timeDiv = document.createElement('div')
        timeDiv.className = 'time'
        const currentTime = String(new Date)
        timeDiv.textContent = currentTime
        timeDiv.style.color="red"
        document.querySelector('.title').insertAdjacentElement('afterend',timeDiv)
    })

})




