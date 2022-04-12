const BASE_API_URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

async function getAll(searchTerm){
    const res = await axios.get(`${BASE_API_URL}`,{params:{q:searchTerm,api_key:API_KEY}});
    return res.data;
    // console.log(res.data.data)
}
function addRandomGif(gifs){
    console.log(gifs);
    // let numOfGifs = gifs;
    // if (numOfGifs){
    //     let randIdx = Math.floor(Math.random()*numOfGifs);
    //     let images = gifs.data[randIdx].images;
    //     console.log(images);
    // }
}

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const search = document.getElementById('search').value;
    //reset input box
    const results = getAll(search);
    addRandomGif(results);
    document.getElementById('search').value = "";
    
    // const gifContainer = document.getElementById('#gifContainer');
    // gifContainer.appendChild()
});
