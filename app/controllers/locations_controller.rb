class LocationsController < ApplicationController

    def index
        locations = Location.all
        options = {
            include: [:comments]
        }
        render json: LocationSerializer.new(locations, options)
    end

    def show
        location = Location.find(params[:id])
        options = {
            include: [:comments]
        }
        render json: LocationSerializer.new(location, options)
    end

end
