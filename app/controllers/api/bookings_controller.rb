class Api::BookingsController < ApplicationController

    def index
        @bookings = Booking.all 
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render :show
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else   
            render json: @booking.errors.full_messages, status: 422
        end
    end  

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else   
            render json: @booking.errors.full_messages, status: 422
        end
    end
    
    def destroy 
        @booking = Booking.find(params[:id])
        @booking.destroy
        render json: ["Booking canceled"]
    end


    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :listing_id, :user_id, :total_price, :num_guests)
    end

end