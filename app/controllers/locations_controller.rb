class LocationsController < ApplicationController

    def index
        location = Location.all
        render json: to_json(include: {comments: {only: [:content, :name]})
    end


end
