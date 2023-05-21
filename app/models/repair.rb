class Repair < ApplicationRecord
    has_many :vehicles
    has_many :clients, through: :vehicles
end
