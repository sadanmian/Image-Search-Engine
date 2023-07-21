const searchFrom = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')

const key = 'aMdOIZ4C_Nhe5YA6HDCwl4NPj_-rRohjQW_1irwMLGI'

let keyword = ''
let page = 1

async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    const value = data.results;

    if (page === 1) {
        searchResult.innerHTML = ''
    }

    value.map((val) => {
        const image = document.createElement('img')
        image.src = val.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = val.links.html
        imageLink.target = '_blank'

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = 'block'
}

searchFrom.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages()
})