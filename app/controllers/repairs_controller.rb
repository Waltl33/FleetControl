class RepairsController < ApplicationController

    def index
        render json: Repair.all, status: :ok
    end

    def show
        render json: Repair.find(params[:id]), status: :ok
    end

    def create
        render json: Repair.create!(repair_params), status: :created
    end
    
    def update
        repairs = Repair.find(params[:id])
        repairs.update(repair_params)
        render json: repairs, status: :accepted
    end

    def destroy
        repairs = Repair.find(params[:id])
        repairs.destroy
        head :no_content
    end


private
    def repair_params
        params.permit(:date_sent, :date_received, :comment, :repaired )
    end
end
