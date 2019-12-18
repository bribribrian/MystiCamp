class Api::ListingsController < ApplicationController

    def create
        @listing = listing.new(listing_params)
    end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end


    private
    def listing_params
        params.require(:listing).permit(:title, :description, :host_id, :lat, :lng, :thumbnail, :cost, :lodging, :num_sites, :max_guests)
    end
end