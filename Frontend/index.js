let getLocationsButton = document.querySelector(".see-locations-button");
let viewCommentsButton = document.querySelector(".view-comments");


const locationsAdapter = new LocationsAdapter;
// const commentsAdapter = new CommentAdapter;





getLocationsButton.addEventListener('click', function(){
    locationsAdapter.fetchLocations()
    // getLocationsButton.disabled = true;
});



// viewCommentsButton.addEventListener('click', function(){
//     commentsAdapter.fetchComments()
//     // getLocationsButton.disabled = true;
// });






