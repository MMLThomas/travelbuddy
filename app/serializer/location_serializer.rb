class LocationSerializer
    include FastJsonapi::ObjectSerializer
    attributes :climate, :name, :temperature, :continent, :language, :temperature
    has_many :comments
   
end