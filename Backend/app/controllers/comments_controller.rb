class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end
    
    def show
        comment = Comment.find(param[:id])
        render json: CommentSerializer.new(comment)
    end

    def create
        comment = Comment.create(comment_params)
        render json: CommentSerializer.new(comment)
    end 

    private
    def comment_params
        params.require(:comment).permit(:name, :content, :location_id)
    end

end
