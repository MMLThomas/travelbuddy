class LocationSerializer
    include FastJsonapi::ObjectSerializer
    attributes :climate, :name, :temperature, :continent, :language, :temperature, :id, :image_ref, :state_country, :comments
    has_many :comments
   
end