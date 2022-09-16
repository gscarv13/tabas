FactoryBot.define do
  factory :property do
    name { Faker::Cosmere.aon }
    address { "#{Faker::Address.street_address} #{Faker::Address.city}" }
    description { Faker::Lorem.paragraph_by_chars(number: 150) }
    monthly_rate { (rand(10.0..35.0) * 1000).round(2) }
  end
end
