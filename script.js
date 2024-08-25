let wrapper = document.querySelector('.wrapper')
let tabButton = document.querySelectorAll('.tabButton')
let contents = document.querySelectorAll('.content')

wrapper.addEventListener('click', (e) => {

    let MainContentID = e.target.dataset.id
    let MainContent = document.querySelector(`#${MainContentID}`)


    tabButton.forEach((btn) => {
        btn.classList.remove('active')
    })
    e.target.classList.add('active')

    
    contents.forEach((content)=>{
        content.classList.remove('active')
    })
    MainContent.classList.add('active')

})

