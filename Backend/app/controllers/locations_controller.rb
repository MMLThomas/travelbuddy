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

    def update
        location = Location.find(params[:id])
        location.update(location_params)
        render json: LocationSerializer.new(location)
    end

    private

    def location_params
        params.require(:location).permit(:image_ref)
    end

end
