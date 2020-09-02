class AddStateCountryToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :state_country, :string
  end
end
