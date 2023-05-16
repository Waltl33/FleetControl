class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :color, :vehicle_number, :mileage
  has_one :client
  has_one :repair
end
