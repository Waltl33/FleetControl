# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'
puts "Seeding data..."
Faker::Config.locale = :en
User.destroy_all
Client.destroy_all
Vehicle.destroy_all
Repair.destroy_all

10.times do

    Clients.create!(
        
    )

end
