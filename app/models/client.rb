class Client < ApplicationRecord
    has_one  :vehicle
    
  validates :first_name, :last_name, :phone, :address, :presence=>true
  validates :phone, length: { is: 10}
end
