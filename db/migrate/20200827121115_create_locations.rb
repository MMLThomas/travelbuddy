class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :climate
      t.string :continent
      t.integer :temperature
      t.integer :distance
      t.string :language

      t.timestamps
    end
  end
end
