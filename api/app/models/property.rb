class Property < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :description, presence: true
  validates :monthly_rate, presence: true

  has_many_attached :pictures
end
