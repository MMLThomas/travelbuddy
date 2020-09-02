class LocationsAdapter{

    constructor(){
        this.baseUrl = 'http://localhost:3000/locations'
    }

    fetchLocations(){
        fetch(this.baseUrl)
            .then(res => res.json())
            .then(json => json.data.forEach(element => {
                let location = new Location(element.attributes)
                location.attachToDOM()
            })
            );
    }

    updateImage(imageRef, id){

        let locationData = {
            image_ref: imageRef,
            location_id: id,
            };
        let configObj = {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify(locationData)
        };
        fetch(`http://localhost:3000/locations/${id}`, configObj);
    }






}