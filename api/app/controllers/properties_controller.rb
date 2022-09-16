class PropertiesController < ApplicationController
  def index
    @properties = Property.includes(:pictures_blobs).all

    render json: @properties
  end
end
