class Api::ListingsController < ApplicationController

    def create
        @listing = listing.new(listing_params)
    end


    private
    def listing_params
        params.require(:listing).permit(:title, :description, :host_id)
    end
end