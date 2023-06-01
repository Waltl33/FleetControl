class ClientsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActionController::UnpermittedParameters, with: :render_unpermitted_params_response
    before_action :set_access_control_headers
    def index     
        render json: Client.all, status: :ok
    end

    def show
        render json: Client.find(params[:id]), status: :ok
    end

    def create
        render json: Client.create!(client_params), status: :created
    end

    def update
        client = Client.find(params[:id])
        render json = client.update!(client_params), status: :ok
    end

    def destroy
        client = Client.find(params[:id])
        client.destroy
        head :no_content
    end



    private

    def client_params
         params.permit(:first_name, :last_name, :phone, :address, :id)
    end
    def render_unpermitted_params_response
        render json: { "Unpermitted Parameters": params.to_unsafe_h.except(:controller, :action, :id,).keys }, status: :unprocessable_entity
    end
    def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end
end
