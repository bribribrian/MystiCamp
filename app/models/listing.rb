class Listing < ApplicationRecord
    belongs_to :host,
        class_name: :User

    has_many :listing_joins
    has_many :amenities, through: :listing_joins, source: :attributable, source_type: 'Amenity'
    has_many :essentials, through: :listing_joins, source: :attributable, source_type: 'Essential'
    has_many :activities, through: :listing_joins, source: :attributable, source_type: 'Activity'
    has_many :terrains, through: :listing_joins, source: :attributable, source_type: 'Terrain'

    def self.in_bounds(bounds)

        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
        
    end

end
