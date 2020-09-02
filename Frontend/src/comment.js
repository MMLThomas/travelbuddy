class Comment{

    constructor(arr){
        this.id = arr.id
        this.name = arr.name
        this.content =  arr.content
        this.location = Location.all.find(location => location.id === arr.location_id)

        this.element = document.createElement('div');


        this.location.comments.push(self)
    }
    

    attachToDOM(){
        this.location.element.append(this.location.comments_view)
        this.location.comments_view.append(this.rendercomment())
    };

    rendercomment(){
        let comment = this
        this.element.innerHTML += 
        `<div class='comment' id='${comment.location.id}-comments'>
            
            <span class="comment-content"><p>${this.content}</p></span>
        </div>`;

        
        return this.element
    }

    

}