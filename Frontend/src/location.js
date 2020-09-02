class Location{

    static all = [];

    constructor(arr){
        this.id = arr.id;
        this.name = arr.name;
        this.stateCountry = arr.state_country;
        this.climate = arr.climate;
        this.temperature = arr.temperature;
        this.continent = arr.continent;
        this.language = arr.language;
        this.imageRef = arr.image_ref;

        this.element = document.createElement('div');
        this.comments_view = document.createElement('div');
    
        this.element.id = `${this.id}`;
        this.locationList = document.querySelector(".location-list");
        
        this.comments = [];
        this.newComments = '';
        
        Location.all.push(this)
    };

    locationImageRefInput = `<input name='imageRef'>`

    


    attachToDOM(){
        this.locationList.append(this.renderLocation())
    };

    renderLocation(){
        let location = this;
        this.element.innerHTML +=
        `<div class="location-details"> 
            <span class="name"><h3>${this.name.toUpperCase()} ${this.stateCountry.toUpperCase()}</h3></span>
            <span class="image"><img src=${this.imageRef} alt="image of ${this.name}" width="400" height="300"></span><br>
            <span class="temperature">${this.temperature} </span>
            <span class="climate"> ${this.climate} </span>
            <span class="language"> ${this.language} </span> 
            <span class="continent"> ${this.continent} </span> 
            </div><br>
            <div class="location-buttons">
                <button class="change-image-button" id="change-image-${this.id}" name="change-image">Change Image</button>
                <button class="view-comments" id="view-comments-${this.id}" name="view-comments">View Comments</button>
            </div>
        `;
        this.element.querySelector(`#change-image-${this.id}`).addEventListener('click', function(event){
            location.element.querySelector(".location-buttons").innerHTML = 
            `<div>
                <p>Enter image address below</p>
                <input class='new-src-input' name='imageRef'><button id='submit-src' name='submit'>Submit</button>
            </div>`
            document.querySelector('#submit-src').addEventListener('click',function(event){
                location.imageRef = document.querySelector('.new-src-input').value
                let locationsAdapter = new LocationsAdapter
                locationsAdapter.updateImage(location.imageRef, location.id)
                location.element.querySelector('img').src = location.imageRef
                location.element.innerHTML = ''
                location.renderLocation()
            });
           
        });
        this.element.querySelector(`#view-comments-${this.id}`).addEventListener('click', function(event){
            if (this.innerText !== 'Hide Comments'){
                let commentsAdapter = new CommentsAdapter;
                commentsAdapter.fetchComments(location.id)
                this.innerText = 'Hide Comments';

                location.comments_view.innerHTML +=  
                `<br><div class='add-comments'><input name='new_comment'/><button>Add Comment</button></div>`;

                location.comments_view.innerHTML += location.newComments

                location.comments_view.querySelector('button').addEventListener('click', function(){
                    let newComment = location.comments_view.querySelector('input').value;
                    commentsAdapter.sendComments(newComment, location.id)
                    let newCommentHTML = `<div class='comment'> <span class="comment-content"><p>${newComment}</p></span> </div>`;
                    location.comments_view.innerHTML += newCommentHTML;
                    location.newComments += newCommentHTML
                });
            }
            else{
                location.comments_view.innerHTML = '<div></div>'
                this.innerText = 'View Comments'
            }
            
        });

        
        return this.element;
    };


}

