class Api::ListingsController < ApplicationController

    def create
        @listing = listing.new(listing_params)
    end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])
    end


    private
    def listing_params
        params.require(:listing).permit(:title, :description, :host_id)
    end
end