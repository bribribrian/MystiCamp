json.extract! @listing, :id, :title, :description, :lat, :lng, :thumbnail

json.amenities @listing.amenities
json.essentials @listing.essentials
json.activities @listing.activities