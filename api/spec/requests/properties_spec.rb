require 'rails_helper'

RSpec.describe '/properties', type: :request do
  let(:factory_one) { FactoryBot.create(:property) }

  before do
    factory_one.pictures.attach(io: File.open('app/assets/images/a1.jpg'), filename: 'a1.jpg',
                                content_type: 'image/jpeg')
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      get properties_url

      expect(response).to be_successful
      expect(response_body.length).to be(1)
    end

    it 'return the property with image url' do
      serialized_property = ActiveModelSerializers::SerializableResource.new(factory_one).as_json

      get properties_url

      expect(response_body.first).to eq(serialized_property.with_indifferent_access)
    end
  end
end
