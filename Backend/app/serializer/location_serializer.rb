class LocationSerializer
    include FastJsonapi::ObjectSerializer
    attributes :climate, :name, :temperature, :continent, :language, :id, :image_ref, :state_country, :longitude, :latitude, :comments
    has_many :comments
   
end