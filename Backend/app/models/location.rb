require 'nokogiri'
require 'open-uri'


class Location < ApplicationRecord
    has_many :comments

    def location_weather


    end
    
    def image_scraper
        html = "https://www.google.com/search?q=#{self.name}+#{self.state_country}&sxsrf=ALeKk01LemOU7ICTM9jVE5ycR2Oe_cTH9g:1598736023074&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj_t_rlq8HrAhUDVK0KHVY6BGYQ_AUoA3oECCUQBQ&biw=1680&bih=971"
        doc = Nokogiri::HTML(open(html));
        div = doc.css("div");
        image_holder = div[6];
        debugger
        image = image_holder.css('img').first;
        self.image_ref = image['src'];
        self.save
    end






end
