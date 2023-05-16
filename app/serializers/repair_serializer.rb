class RepairSerializer < ActiveModel::Serializer
  attributes :id, :date_sent, :date_received, :comment, :repaired
end
