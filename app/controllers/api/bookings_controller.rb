class Api::BookingsController < ApplicationController

    def index
        if params[:userId]
            @bookings = User.find(params[:userId]).bookings
        else
            @bookings = Booking.all 
        end
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
        render :show
    end


    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :listing_id, :listing_name, :user_id, :total_price, :num_guests)
    end

end