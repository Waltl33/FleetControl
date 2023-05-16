class CreateRepairs < ActiveRecord::Migration[7.0]
  def change
    create_table :repairs do |t|
      t.integer :date_sent
      t.integer :date_received
      t.string :comment
      t.boolean :repaired

      t.timestamps
    end
  end
end
