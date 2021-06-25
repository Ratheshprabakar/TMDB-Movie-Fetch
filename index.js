const API_KEY ='YOUR_TMDB_API_KEY';
const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='+API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById("main");


getMovies(URL);

function getMovies(url){

    fetch(url)
    .then(response => response.json())
    .then(json=> {
        console.log(json);
        
        showMovies(json.results);
    })
    .catch(err=>{
        console.log(err);
    });    
}
function showMovies(data){
    main.innerHTML = '';

    data.forEach(element => {
        const {title, poster_path, vote_average} = element;

        if(vote_average>=8.0){
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
                <div class="movie-info">
                      <h3>${title}</h3>
                    <span style ="color:red">${vote_average}</span>
                </div>
            `

            main.appendChild(movieElement);
        }
    });
}
