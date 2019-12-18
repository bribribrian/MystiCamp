class Terrain < ApplicationRecord
    has_many :listing_joins, as: :attributable
    has_many :listings, through: :listing_joins
end
