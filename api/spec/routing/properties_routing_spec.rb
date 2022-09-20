require 'rails_helper'

RSpec.describe Api::V1::PropertiesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/v1/properties').to route_to('api/v1/properties#index')
    end
  end
end
