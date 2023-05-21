class ClientsController < ApplicationController

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
        clients = Client.find(params[:id])
        clients.update(client_params)
        render json: clients, status: :accepted
    end
    def destroy
        client = Client.find(params[:id])
        client.destroy
        head :no_content
    end



    private

    def client_params
         params.permit(:first_name, :last_name, :phone, :address)
    end

end
