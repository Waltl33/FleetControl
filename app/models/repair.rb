class Repair < ApplicationRecord
    has_many :vehicles, dependent: :destroy
    has_many :clients, through: :vehicles

    validates :date_sent, :comment, :presence=>true
end
