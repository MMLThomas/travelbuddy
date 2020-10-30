let getLocationsButton = document.querySelector(".see-locations-button");
let viewCommentsButton = document.querySelector(".view-comments");
let sortByWeatherButton = document.querySelector(".sort-by-weather");
let sortByNameButton = document.querySelector(".sort-by-name");
let sortByContinentButton = document.querySelector(".sort-by-continent");
let sortByLanguageButton = document.querySelector(".sort-by-language");

const locationsAdapter = new LocationsAdapter;





getLocationsButton.addEventListener('click', function(){
    this.disabled = true;
    locationsAdapter.fetchLocations()

    sortByWeatherButton.addEventListener('click', function(){
        debugger
        Location.sortByWeather()
    });
});

sortByWeatherButton.addEventListener('click', function(){
    debugger
    Location.sortByWeather()
});

// sortByNameButton.addEventListener('click', function(){
//     Location.sortByWeather()
// });

// sortByContinentButton.addEventListener('click', function(){
//     Location.sortByContinent()
// });

// sortByLanguageButton.addEventListener('click', function(){
//     Location.sortByLanguage()
// });









