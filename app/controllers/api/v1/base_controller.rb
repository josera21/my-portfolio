class Api::V1::BaseController < ApplicationController
  before_action :set_respond_to_json

  protected
  def set_respond_to_json
    request.format = :json
  end
end