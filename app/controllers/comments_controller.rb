class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end
    
    def show
        comment = Comment.find(param[:id])
        render json: CommentSerializer.new(comment)
    end

end
