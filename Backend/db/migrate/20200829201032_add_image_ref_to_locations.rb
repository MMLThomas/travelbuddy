class AddImageRefToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :image_ref, :string
  end
end
