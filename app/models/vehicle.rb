class Vehicle < ApplicationRecord
  belongs_to :client
  belongs_to :repair

  validates :vehicle_number, uniqueness: true
  validates :make, :model, :color, :model_number, :mileage, :presence => true
end
