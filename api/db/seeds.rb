def attach_picture(property, path)
  filename = path.split('/').last

  property.pictures.attach(io: File.open(path), filename: "#{filename}-#{Random.seed}", content_type: 'image/jpeg')
end

pictures_set_1 = [
  'app/assets/images/a1.jpg',
  'app/assets/images/a2.jpg',
  'app/assets/images/a3.jpg',
  'app/assets/images/a4.jpg',
  'app/assets/images/a5.jpg'
]

pictures_set_2 = [
  'app/assets/images/b1.jpg',
  'app/assets/images/b2.jpg',
  'app/assets/images/b3.jpg'
]

pictures_set_3 = [
  'app/assets/images/c1.jpg',
  'app/assets/images/c2.jpg',
  'app/assets/images/c3.jpg',
  'app/assets/images/c4.jpg'
]

pictures_set_4 = [
  'app/assets/images/d1.jpg',
  'app/assets/images/d2.jpg',
  'app/assets/images/d3.jpg',
  'app/assets/images/d4.jpg'
]

pictures_set_5 = [
  'app/assets/images/e1.jpg',
  'app/assets/images/e2.jpg',
  'app/assets/images/e3.jpg',
  'app/assets/images/e4.jpg'
]

sets = [ pictures_set_1, pictures_set_2, pictures_set_3, pictures_set_4, pictures_set_5 ]

puts 'Creating properties...'

50.times do |iteration|
  property = Property.create(
    name: Faker::Cosmere.aon,
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    description: Faker::Lorem.paragraph_by_chars(number: 150),
    monthly_rate: (rand(10.0 .. 35.0) * 1000).round(2)
  )

  pictures_set = sets[ iteration % 5 ]
  pictures_set.each { |img_path|  attach_picture(property, img_path) }
end

puts 'Done!'
