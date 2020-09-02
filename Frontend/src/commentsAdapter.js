class CommentsAdapter{

    constructor(id){
        this.baseUrl = `http://localhost:3000/locations`
    }

    fetchComments(id){
        fetch(this.baseUrl)
            .then(res => res.json())
            .then(json => json.data.forEach(element => {
                if (element.attributes.id === id){
                    element.attributes.comments.forEach(e => {
                    let comment = new Comment(e);
                    comment.attachToDOM()
                    });
                }
        }));
    }
    sendComments(name, id){
        let commentData = {
            content: name,
            location_id: id,
            name: "@user"
          };
        let configObj = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify(commentData)
        };
        fetch("http://localhost:3000/comments", configObj);
    }





}