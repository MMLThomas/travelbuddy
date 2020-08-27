class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end
    
    def show
        comment = Comment.find(param[:id])
        render json: comment
    end

end
