class ListingJoin < ApplicationRecord
    belongs_to :attributable, polymorphic: true
    belongs_to :listing
end
