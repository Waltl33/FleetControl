class VehiclesController < ApplicationController

    def index
        render json: Vehicle.all, status: :ok
    end

    def show
        render json: Vehicle.find(params[:id]), status: :ok
    end
    
    def create
        render json: Vehicle.create!(vehicle_params), status: :created
    end

    def update
        vehicles = Vehicle.find(params[:id])
        render json: vehicles.update!(vehicles_params), status: :ok
    end

    def destroy
        vehicles = Vehicle.find(params[:id])
        vehicles.destroy
        head :no_content
    end


private

    def vehicle_params
        params.permit(:make, :model, :color, :model_number, :mileage, :in_service)
    end

end
