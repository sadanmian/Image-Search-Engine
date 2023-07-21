const searchFrom = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')

const key = 'aMdOIZ4C_Nhe5YA6HDCwl4NPj_-rRohjQW_1irwMLGI'
// aMdOIZ4C_Nhe5YA6HDCwl4NPj_-rRohjQW_1irwMLGI
// https://api.unsplash.com/search/photos?page=1&query=office

let keyword = ''
let page = 1

async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    const value = data.results;

    value.map((val) => {
        const image = document.createElement('img')
        image.src = val.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = val.links.html
        imageLink.target = '_blank'

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
}

searchFrom.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})