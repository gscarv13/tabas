require 'rails_helper'

RSpec.describe PropertiesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/properties').to route_to('properties#index')
    end
  end
end
