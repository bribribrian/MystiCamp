class Listing < ApplicationRecord
    belongs_to :user
    has_many :listing_joins
    has_many :amenities, through: :listing_joins, source: :attributable, source_type: 'Amenity'
end
