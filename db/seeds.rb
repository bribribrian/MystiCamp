User.destroy_all
Listing.destroy_all
Amenity.destroy_all
ListingJoin.destroy_all


demo = User.create!(username: 'Demo_User',f_name: 'Cool',l_name: 'Visitor',email: 'demouser@gmail.com', password: "password", zip: 10036)
jack = User.create!(username: 'HitDaRoadAgian55',f_name: 'Jack',l_name: 'Kerouac',email: 'Subterranean1@gmial.com', password: "password")
bobby = User.create!(username: 'ThinManDumpTruck60',f_name: 'Robert',l_name: 'Zimmerman',email: 'StillRollinOn60@gmail.com', lat: 40.7265,lng: -73.9815, password: "password", zip: 10036)
dali = User.create!(username: 'DaliGala4Eva',f_name: 'Salvador',l_name: 'Dali',email: 'MoonElephantEyeball@gmail.com', lat: 40.7484,lng: -73.9857, password: "password", zip: 10036)

cool_place = Listing.create!(host_id: bobby.id, title:'Cool Place', description:'This is a very cool place.', lat: 40.7061, lng: -73.9969)
strange_place = Listing.create!(host_id: dali.id, title:'Strange Place', description:'A strange place.', lat: 40.7830, lng: -73.9590)
interesting_place = Listing.create!(host_id: bobby.id, title:'Interesting Place', description:'This is a very interesting place.', lat: 41.7061, lng: -74.9969)
unusual_place = Listing.create!(host_id: dali.id, title:'Unusual Place', description:'A very unusual place.', lat: 41.7830, lng: -75.9590)

wifi = Amenity.create!(name: 'Wifi')
showers = Amenity.create!(name: 'Showers')

listings_join_one = ListingJoin.create!(listing_id: cool_place.id, attributable_id: wifi.id, attributable_type: 'Amenity')
listings_join_two = ListingJoin.create!(listing_id: strange_place.id, attributable_id: showers.id, attributable_type: 'Amenity')

