class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.string :color
      t.integer :vehicle_number
      t.integer :mileage
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :repair, null: false, foreign_key: true

      t.timestamps
    end
  end
end
