class CreateRepairs < ActiveRecord::Migration[7.0]
  def change
    create_table :repairs do |t|
      t.string :date_sent
      t.string :date_received
      t.string :comment
      t.boolean :repaired

      t.timestamps
    end
  end
end
