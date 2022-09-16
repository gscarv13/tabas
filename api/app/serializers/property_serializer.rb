class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :monthly_rate, :pictures

  def pictures
    return [] unless object.pictures.attached?

    object.pictures.map { |image| { id: image.id, url: image.url } }
  end
end
