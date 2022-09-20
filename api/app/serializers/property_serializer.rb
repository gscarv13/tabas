class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :monthly_rate, :cover, :pictures

  def cover
    return nil unless object.pictures.attached?

    object.pictures.to_a[2].url
  end

  def pictures
    return [] unless object.pictures.attached?

    object.pictures.map { |image| { id: image.id, url: image.url } }
  end
end
