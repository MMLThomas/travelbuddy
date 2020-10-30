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
        this.longitude = arr.longitude;
        this.latitude = arr.latitude;

        this.element = document.createElement('div');
        this.comments_view = document.createElement('div');
        this.element.className = "location-box"
        this.element.id = `${this.id}`;
        this.locationList = document.querySelector(".location-list");
        
        this.comments = [];
        this.newComments = '';
        
        Location.all.push(this)
    };

    static updateDom( locations = Location.all){
        locations.forEach( l => {
            l.element.innerHTML = '';
            l.attachToDOM();
        })
    }

    static sortByWeather(){
        debugger
        let locationWeather = Location.all.sort((a, b) => a.temperature - b.temperature)
        Location.updateDom(locationWeather)
    }
    

    // static sortByWeather(){
    //     let locationWeather = Location.all
    //     locationWeather.sort((a, b) => a.temperature > b.temperature ? 1 : -1 )
    //     Location.updateDom(locationWeather)
    // }

    // static sortByWeather(){
    //     let locationWeather = Location.all
    //     locationWeather.sort((a, b) => a.temperature > b.temperature ? 1 : -1 )
    //     Location.updateDom(locationWeather)
    // }
    
    


    fetchLocationWeather(){
        let thisLocation = this
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${thisLocation.latitude}&lon=${thisLocation.longitude}&appid=b7112f12e320ead8d43a6796f59496cd
        `)
        .then(res => {
             return res.json();
        }).then(function(res) {
            let temp = res.main.temp;
            thisLocation.updateTemperature(temp);
        });
    }

    
    updateTemperature(temp){
        let weatherInF =  (temp - 273.15) * (9/5) + 32
        this.temperature = Math.round(weatherInF)
        this.attachToDOM()
    }

    attachToDOM(){
        this.locationList.append(this.renderLocation())
    };

    renderLocation(){
        let location = this;

        // Add location to DOM
        this.element.innerHTML +=
        `<div class="location-details"> 
            <span class="name"><h3>${this.name.toUpperCase()} ${this.stateCountry.toUpperCase()}</h3></span>
            <span class="image"><img src=${this.imageRef} alt="image of ${this.name}" width="400" height="300"></span><br>
            <span class="temperature">Current Weather: ${this.temperature}F </span>
            <span class="climate">Climate: ${this.climate}  </span><br>
            <span class="language"> Standard Language: ${this.language.toUpperCase()}  </span> 
            <span class="continent"> Continent: ${this.continent} </span> 
            </div><br>
            <div class="location-buttons">
                <button class="change-image-button" id="change-image-${this.id}" name="change-image">Change Image</button>
                <button class="view-comments" id="view-comments-${this.id}" name="view-comments">View Comments</button>
            </div>
        `;

        // Change locations image
        this.element.querySelector(`#change-image-${this.id}`).addEventListener('click', function(event){
            location.element.querySelector(".location-buttons").innerHTML = 
            `<div>
                <p>Enter image address below</p>
                <button class='exit'>X</button><input class='new-src-input' name='imageRef' value='${location.imageRef}'><button id='submit-src' name='submit'>Submit</button>

            </div>`
            document.querySelector('#submit-src').addEventListener('click',function(event){
                location.imageRef = document.querySelector('.new-src-input').value
                let locationsAdapter = new LocationsAdapter
                locationsAdapter.updateImage(location.imageRef, location.id)
                location.element.querySelector('img').src = location.imageRef
                location.element.innerHTML = ''
                location.renderLocation()
            });

            document.querySelector('.exit').addEventListener('click',function(event){
                location.element.innerHTML = '<div></div>'
                location.renderLocation()
            })

           
        });

        // View and submit location comments  
        this.element.querySelector(`#view-comments-${this.id}`).addEventListener('click', function(event){
            location.element.append(location.comments_view)
            
            
            if (this.innerText !== 'Hide Comments'){
                this.innerText = 'Hide Comments';
                let commentsAdapter = new CommentsAdapter;
                commentsAdapter.fetchComments(location.id)

                // add comment
                location.comments_view.innerHTML +=  
                `<br><div class='add-comments'><input name='new_comment'/><button>Add Comment</button></div>`;

                location.comments_view.querySelector('button').addEventListener('click', function(){
                    let newComment = location.comments_view.querySelector('input').value;
                    commentsAdapter.sendComments(newComment, location.id)
                    let newCommentHTML = `<div class='comment'> <span class="comment-content"><p>${newComment}</p></span> </div>`;
                    location.comments_view.innerHTML += newCommentHTML;
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

