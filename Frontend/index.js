let getLocationsButton = document.querySelector(".see-locations-button");
let viewCommentsButton = document.querySelector(".view-comments");


const locationsAdapter = new LocationsAdapter;





getLocationsButton.addEventListener('click', function(){
    this.disabled = true;
    locationsAdapter.fetchLocations()
});









