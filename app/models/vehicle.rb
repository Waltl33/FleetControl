class Vehicle < ApplicationRecord
  belongs_to :client
  belongs_to :repair
end
