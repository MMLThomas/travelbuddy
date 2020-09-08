# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    locations = Location.create([
        {name: 'Malibu', climate: 'dry and sunny', continent: 'North America', temperature: 78, language: 'english'},
        {name: 'Seattle', climate: 'cool and wet', continent: 'North America', temperature: 70, language: 'english'}, 
        {name: 'Tokyo', climate: 'humid', continent: 'Asia', temperature: 88, language: 'japanese'}, 
        {name: 'Dubai', climate: 'dry and sunny', continent: 'Asia', temperature: 94, language: 'arabic'}, 
        {name: 'Osaka', state_country: 'Japan', continent: 'Asia', language: 'japanese', temperature: '80', longitude: 135.5023, latitude: 34.6937, climate: 'temperate humid', image_ref: 'https://www.japan-guide.com/thumb/XYZeXYZe2157_1680.jpg'},
        {name: 'New York', state_country: 'New York', continent: 'North America', language: 'English', temperature: '80', longitude: 74.0060, latitude: 40.7128, climate: 'temperate humid', image_ref: 'https://www.japan-guide.com/thumb/XYZeXYZe2157_1680.jpg'},
        {name: 'Paris', state_country: 'France', continent: 'Europe', language: 'French', temperature: '80', longitude: 2.3522, latitude: 48.8566, climate: 'temperate humid', image_ref: 'https://i.insider.com/5d0150e06fc9200b5a05f042?width=1136&format=jpeg'},
        {name: 'London', state_country: 'England', continent: 'Europe', language: 'English', temperature: '80', longitude: 0.1278, latitude: 51.5074, climate: 'temperate humid', image_ref: 'https://www.westjet.com/assets/wj-web/images/2018/wj/14771-Home-Hero---mobile-737x426.jpg'},
        {name: 'Seoul', state_country: 'South Korea', continent: 'Asia', language: 'Korean', temperature: '80', longitude: 126.9780, latitude: 37.5665, climate: 'temperate humid', image_ref: 'https://www.visitbritain.com/sites/default/files/styles/consumer_hero_image_mobile/public/consumer/paragraphs-bundles/image-banner/london_skyline_vb34141644_0.jpg?itok=RIwSzRW6'},
        {name: 'Bali', state_country: 'Indonesia', continent: 'Asia', language: 'Indonesian', temperature: '80', longitude: 8.3405, latitude: -27.8522, climate: 'temperate humid', image_ref: 'https://i.pinimg.com/originals/b1/a5/4e/b1a54ea53ff5cb88a40fc899923b21c9.jpg'},
        {name: 'Rio', state_country: 'Brazil', continent: 'South America', language: 'Portuguese', temperature: '80', longitude: 43.1729, latitude: -22.9068, climate: 'temperate humid', image_ref: ' https://www.costacruises.eu/content/dam/costa/inventory-assets/ports/RIO/c035_rio_de_janeiro.jpg.image.750.563.low.jpg'},
        {name: 'Lisbon', state_country: 'Portugal', continent: 'Europe', language: 'Portuguese', temperature: '80', longitude: 9.1393, latitude: 38.7223, climate: 'temperate humid', image_ref: 'https://i.insider.com/5a0b634b7c86cc3d038b47f0?width=1100&format=jpeg&auto=webp'},
        {name: 'Strasbourg', state_country: 'France', continent: 'Europe', language: 'French', temperature: '80', longitude: 7.7521, latitude: 48.5734, climate: 'temperate humid', image_ref: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Firenelevine%2Ffiles%2F2018%2F09%2FIMG_8630-EFFECTS.jpg'},
        {name: 'Phoenix', state_country: 'Arizona', continent: 'North America', language: 'English', temperature: '80', longitude: 112.0740, latitude: 33.4484, climate: 'temperate humid', image_ref: 'https://res.cloudinary.com/simpleview/image/upload/v1529338942/clients/phoenix/148e5282_6056_4aca_9135_d0d5f25e9a9d_df00ab2b-7f9c-462e-a8a7-903f8757870e.jpg'},
        {name: 'Seville', state_country: 'Spain', continent: 'Europe', language: 'Spanish', temperature: '80', longitude: 5.9845, latitude: 37.3891, climate: 'temperate humid', image_ref: 'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/5ae36e6bc2c8d8000bb0eb9a/files/backpacking-seville-spain-main-image-900.jpg'},
        {name: 'Tangier', state_country: 'Morocco', continent: 'Africa', language: 'Arabic', temperature: '80', longitude: 5.8340, latitude: 35.7595, climate: 'temperate humid', image_ref: 'https://media.sailwiz.com/09a081147/tangier.jpg'},
        {name: 'Dakhla', state_country: 'Morocco', continent: 'Africa', language: 'Arabic', temperature: '80', longitude: 12.1633, latitude: 34.6937, climate: 'temperate humid', image_ref: ' https://friendlymorocco.com/wp-content/uploads/2017/07/Dakhla-beach.jpg'},
        {name: 'Milan', state_country: 'Italy', continent: 'Europe', language: 'Italian', temperature: '80', longitude: 9.1900, latitude: 45.4642, climate: 'temperate humid', image_ref: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/milan-italy-d584e8eba0576cd6bba27d5e555df5ef.jpg'},
        {name: 'Toronto', state_country: 'Canada', continent: 'North America', language: 'English', temperature: '80', longitude: 79.3832, latitude: 43.6532, climate: 'temperate humid', image_ref: 'https://s3-us-west-2.amazonaws.com/nugget-travel/2017/03/Canada-for-Kids_Toronto-skyline.jpg'},
        {name: 'Tetouan', state_country: 'Morocco', continent: 'Africa', language: 'Arabic', temperature: '80', longitude: 5.3626, latitude: 35.5889, climate: 'temperate humid', image_ref: 'https://i.ytimg.com/vi/6Tz6ktCm7fc/hqdefault.jpg'},
        {name: 'Lagos', state_country: 'Nigeria', continent: 'Africa', language: 'English', temperature: '80', longitude: 3.3792, latitude: 6.5244, climate: 'temperate humid', image_ref: 'https://media.newyorker.com/photos/5909523dc14b3c606c103bac/master/pass/Victoria-Island-580.jpg'}])
