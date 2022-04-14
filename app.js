const BASE_API_URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const GIF_CONTAINER = document.getElementById("gifContainer");
const SEARCH_FORM = document.getElementById("searchForm");

async function addGif(results){
    let numOfGifs = results.data.length;
    if(numOfGifs){
        let randIdx = Math.floor(Math.random()*numOfGifs);
        // let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        newImg.src = results.data[randIdx].images.original.url;
        newImg.classList.add('gifBox');
        GIF_CONTAINER.appendChild(newImg);
    }
}

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const search = document.getElementById('search').value;
    
    const res = await axios.get(`${BASE_API_URL}`,{params:{q:search,api_key:API_KEY}});
    //reset input box
    addGif(res.data);
    document.getElementById('search').value = "";
    
    // const gifContainer = document.getElementById('#gifContainer');
    // gifContainer.appendChild()
});

$("#deleteBtn").on('click', function(){
    console.log("clicked");
    $("#gifContainer").empty()
});
