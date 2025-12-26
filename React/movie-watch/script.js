let movies = [
    {id:1, title:"Inception", category:"Science-Fiction", year:2010, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1a%2Fdc%2Fd0%2F1adcd0124a2ead3975ace838aa91de47.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=d8ebbdbd1a35999b088508d1566bd26929f3bfe585347f93db576d476dedb210"},
    {id:2, title:"Titanic", category:"Drama", year:1997, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff4%2F0a%2F03%2Ff40a0390e142a6e1890774c3765e856e.jpg&f=1&nofb=1&ipt=1970e9bd8727eccff7c07638c69b8f8455be94c8684a7c43532b7e191c81e920"},
    {id:3, title:"Avengers", category:"Action", year:2012, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2F3ND0OSYvVW2qG0YHUp43Di80d93.jpg&f=1&nofb=1&ipt=eed53de8a7ed3b32eaadd59684f3047506cdeb65c999a6d2eb334ad3539694de"},
    {id:4, title:"The Conjuring", category:"Horreur", year:2013, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.heyuguys.com%2Fimages%2F2013%2F05%2FThe-Conjuring-Poster.jpg&f=1&nofb=1&ipt=d12b68e4359e1723adf60ccd1ec5c5d71b10a9b34dbf05b28c4e8e97334ddec4"},
    {id:5, title:"Sicario", category:"Thriller", year:2015, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.itl.cat%2Fpngfile%2Fbig%2F56-567702_sicario-wallpapers-movie-hq-sicario-pictures-sicario-movie.jpg&f=1&nofb=1&ipt=03d0da514c2a3e686ec23816bbcdbb673c42eb9d3fc6714c2889b63ac6741036"},
    {id:6, title:"F1 2025", category:"Sport", year:2025, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filmofilia.com%2Fwp-content%2Fuploads%2F2025%2F06%2FF-Movie-Poster-.jpg&f=1&nofb=1&ipt=12b94b44284979fc76592d4664939f13e9989ef31ed3e83494743b2cb69fc8ae"},
    {id:7, title:"The Nice Guys", category:"Comedy", year:2016, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefashionisto.com%2Fwp-content%2Fuploads%2F2016%2F05%2FThe-Nice-Guys-Movie-Poster-Russell-Crowe-Ryan-Gosling.jpg&f=1&nofb=1&ipt=a3bde869b5e952528544cc54885586d6aa146a09af8d00344b7eb0e0fffa688c"},
    {id:8, title:"Lucy", category:"Science-Fiction", year:2014, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigscreenautographs.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fesedssssssssd-3.jpg&f=1&nofb=1&ipt=602313a291b17f0411fa66b3f72af813a9bb98830d2aa32cd826e7d4e7c74f2a"},
    {id:9, title:"Spirited Away", category:"Animation", year:2001, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffa%2F35%2F8e%2Ffa358e86eef793031e7f9577cfeaf32f.jpg&f=1&nofb=1&ipt=f687a70d8e13ebf7921fdbbd57ab2928d43a9ee16c6f067e0e88b3e88c9e9b28"},
    {id:10, title:"The Girl with the Dragon Tattoo", category:"Thriller", year:2011, image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvbLedKc1BUF4FOH1GyHW62FulCc.jpg&f=1&nofb=1&ipt=0d6f3793a01e1c670a6d5ae15d0a9068f0cc09665667ee24cb2ff030a86ddb3e"},
];

let watchlist = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : []; 

let categories = [...(new Set(movies.map(movie => movie.category)))];

// function to display movie list
function displayMovies(movies) {
    document.querySelector('.movies-grid').innerHTML = movies.map(movie => `
        <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
                <div class="movie-info flex-col gap-3">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-year">${movie.year}</p>
                    <p class="movie-category">${movie.category}</p>
                    <button class="add-to-watchlist" onclick="addToWatchList(${movie.id})">Add to Watchlist</button>
                </div>
            </div>`).join('');
};

displayMovies(movies);

// function to add movie to watchlist
function addToWatchList(id) {
    let movie = movies.find(movie => movie.id === id);
    if (!watchlist.find(m => m.id === id)) {
        watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        loadWatchList(watchlist);
        alert("Movie added to watchlist");
    } else {
        alert("Movie already in watchlist");
    }
    watchListCount()
}
// function to load watchlist
function loadWatchList(list) {
    document.querySelector('.watchlist-container').innerHTML = list.length === 0 ? '<p>Your watchlist is empty.</p>' : list.map(movie=> `
        <div class="watchlist-item">
            <img src="${movie.image}" alt="${movie.title}" class="watchlist-poster">
            <div class="watchlist-details">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.category}</p>
            </div>
            <button class="remove-btn" onclick="removeMovie(${movie.id})">Remove</button>
        </div>`).join('');
}

loadWatchList(watchlist);


// function to remove movie from watchlist 
function removeMovie(id) {
    if (confirm("Are you sure you want to remove this movie from your watchlist?")) {
        watchlist = watchlist.filter(movie => movie.id !== id);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        loadWatchList(watchlist);
        alert("Movie removed from watchlist");
        watchListCount();
    }
    
}

// functio to update watchlist count
function watchListCount() {
    if (watchlist.length === 0) {
        document.querySelector('.watchlist-count').innerText = '0';
        return;
    }
    document.querySelector('.watchlist-count').innerText = watchlist.length;
}

// fucntion to to search movies
document.querySelector('#search-bar').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm) || movie.category.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});


function loadCategories(movies) {
    document.querySelector('#filters').innerHTML += categories.map(category => `
        <div class="form-check">
            <input class="form-check-input" type="radio" value="${category}" id="${category}" onchange="filterByCategory()">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
        </div>
        `).join('');
    } ;
loadCategories(movies);
    
// function to filter movies by category
function filterByCategory() {
    let selectedCategory = document.querySelector('input[name="category"]:checked') ? document.querySelector('input[name="category"]:checked').value : null;
}