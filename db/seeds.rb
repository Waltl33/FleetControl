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

    Client.create!(
            first_name:Faker::Name.first_name,
            last_name:Faker::Name.last_name,
            phone:Faker::Number.number(digits: 10),
            address:Faker::Address.full_address #=> "282 Kevin Brook, Imogeneborough, CA 58517"
    )


5.times do
    Repair.create!(
            date_sent:Faker::Date.between(from: '2020-09-23', to: '2023-09-25'),
            comment:Faker::Quote.famous_last_words,
            repaired:true
    )
end


5.times do
    Repair.create!(
            date_sent:Faker::Date.forward(days: 23),
            comment:Faker::Quote.famous_last_words,
            repaired:false
    )
end

15.times do
    Vehicle.create!(
        make:Faker::Vehicle.make,
        model:Faker::Vehicle.make,
        color:Faker::Vehicle.color,
        mileage:Faker::Vehicle.mileage,
        vehicle_number:Faker::Number.number(digits: 6),
        client_id: Client.all().sample().id,
        repair_id: Repair.all().sample().id,
        
    )
end
end
puts 'Done seeding data'