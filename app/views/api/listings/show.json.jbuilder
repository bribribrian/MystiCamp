json.extract! @listing, :id, :title, :description, :lat, :lng, :thumbnail, :cost, :lodging, :num_sites, :max_guests

json.amenities @listing.amenities
json.essentials @listing.essentials
json.activities @listing.activities
json.terrains @listing.terrains