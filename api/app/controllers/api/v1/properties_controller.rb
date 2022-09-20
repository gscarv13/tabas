module Api
  module V1
    class PropertiesController < ApplicationController
      def index
        properties = Property.includes(:pictures_blobs).order('id ASC').all

        render json: properties
      end
    end
  end
end
