User.destroy_all
Listing.destroy_all
Amenity.destroy_all
Essential.destroy_all
Terrain.destroy_all
ListingJoin.destroy_all


demo = User.create!(username: 'Demo_User',f_name: 'Cool',l_name: 'Visitor',email: 'demouser@gmail.com', password: "password", zip: 10036)
jack = User.create!(username: 'HitDaRoadAgian55',f_name: 'Jack',l_name: 'Kerouac',email: 'Subterranean1@gmial.com', password: "password")
bobby = User.create!(username: 'ThinManDumpTruck60',f_name: 'Robert',l_name: 'Zimmerman',email: 'StillRollinOn60@gmail.com', lat: 40.7265,lng: -73.9815, password: "password", zip: 10036)
dali = User.create!(username: 'DaliGala4Eva',f_name: 'Salvador',l_name: 'Dali',email: 'MoonElephantEyeball@gmail.com', lat: 40.7484,lng: -73.9857, password: "password", zip: 10036)

cool_place = Listing.create!(host_id: bobby.id, title:'Cool Place',
                            description:'This is a very cool place. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris.
                            Illud scriptorem no his, eu probo democritum sea.',
                            lat: 40.7061, lng: -73.9969, thumbnail: 'night',
                            cost: 50.99, lodging: 'Tent', num_sites: 3, max_guests: 6
                            )
strange_place = Listing.create!(host_id: dali.id, title:'Strange Place',
                            description:'A strange place.. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris.
                            Illud scriptorem no his, eu probo democritum sea.',
                            lat: 40.7830, lng: -73.9590, thumbnail: 'forest',
                            cost: 32.99, lodging: 'Cabin', num_sites: 5, max_guests: 12
                            )
interesting_place = Listing.create!(host_id: bobby.id, title:'Interesting Place',
                            description:'This is a very interesting place. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris.
                            Illud scriptorem no his, eu probo democritum sea.',
                            lat: 41.7061, lng: -74.9969, thumbnail: 'mountain',
                            cost: 150.99, lodging: 'Tent', num_sites: 10, max_guests: 3
                            )   
unusual_place = Listing.create!(host_id: dali.id, title:'Unusual Place',
                            description:'A very unusual place. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et,Sit ad ubique democritum,
                            usu zril homero consequat ei, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris.
                            Illud scriptorem no his, eu probo democritum sea.',
                            lat: 41.7830, lng: -75.9590, thumbnail: 'default',
                            cost: 110.99, lodging: 'Cabin', num_sites: 6, max_guests: 11
                            )
awesome_place = Listing.create!(host_id: bobby.id, title:'Awesome Place',
                            description:'This place is awesome. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris. Sit ad ubique democritum,
                            usu zril homero consequat ei,
                            Illud scriptorem no his, eu probo democritum sea.',
                            lat: 49.7061, lng: -79.9969, thumbnail: 'daylight',
                            cost: 25.99, lodging: 'Tent', num_sites: 7, max_guests: 5
                            )
outstanding_place = Listing.create!(host_id: dali.id, title:'Outstanding Place',
                            description:'This place is outstanding. Lorem ipsum dolor sit amet,
                            duo duis quaeque adipiscing ad, diam iudico latine at mel. Nec no sint quaerendum,
                            oporteat imperdiet constituam est et, vero oblique elaboraret ad mel.
                            Vim eu recusabo splendide. Duo nostrud copiosae et,
                            prima philosophia ad est. Duo nostrud copiosae et,
                            prima philosophia ad est. Sit ad ubique democritum,
                            usu zril homero consequat ei, quo ei autem nostro persequeris.
                            Illud scriptorem no his, eu probo democritum sea.Duo nostrud copiosae et,
                            prima philosophia ad est.',
                            lat: 32.7830, lng: -69.9590, thumbnail: 'sunbeam',
                            cost: 99.99, lodging: 'Cabin', num_sites: 1, max_guests: 10
                            )

wifi = Amenity.create!(name: 'Wifi')
showers = Amenity.create!(name: 'Showers')

 campfires = Essential.create!(name: 'Campfires')
 toilets = Essential.create!(name: 'Toilets')

 fishing = Activity.create!(name: 'Fishing')
 swimming = Activity.create!(name: 'Swimming')

 waterfall = Terrain.create!(name: 'Waterfall')
 forest = Terrain.create!(name: 'Forest')

listings_join_one = ListingJoin.create!(listing_id: cool_place.id, attributable_id: wifi.id, attributable_type: 'Amenity')
listings_join_two = ListingJoin.create!(listing_id: strange_place.id, attributable_id: showers.id, attributable_type: 'Amenity')
listings_join_three = ListingJoin.create!(listing_id: strange_place.id, attributable_id: wifi.id, attributable_type: 'Amenity')
listings_join_four = ListingJoin.create!(listing_id: cool_place.id, attributable_id: showers.id, attributable_type: 'Amenity')
listings_join_five = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: showers.id, attributable_type: 'Amenity')
listings_join_six = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: showers.id, attributable_type: 'Amenity')
listings_join_seven = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: wifi.id, attributable_type: 'Amenity')
listings_join_eight = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: showers.id, attributable_type: 'Amenity')
listings_join_nine = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: wifi.id, attributable_type: 'Amenity')
listings_join_ten = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: showers.id, attributable_type: 'Amenity')

listings_join_eleven = ListingJoin.create!(listing_id: cool_place.id, attributable_id: campfires.id, attributable_type: 'Essential')
listings_join_twelve = ListingJoin.create!(listing_id: strange_place.id, attributable_id: campfires.id, attributable_type: 'Essential')
listings_join_thirteen = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: campfires.id, attributable_type: 'Essential')
listings_join_fourteen = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: campfires.id, attributable_type: 'Essential')
listings_join_fifteen = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: campfires.id, attributable_type: 'Essential')
listings_join_sixteen = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: toilets.id, attributable_type: 'Essential')
listings_join_seventeen = ListingJoin.create!(listing_id: cool_place.id, attributable_id: toilets.id, attributable_type: 'Essential')
listings_join_eighteen = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: toilets.id, attributable_type: 'Essential')
listings_join_nineteen = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: toilets.id, attributable_type: 'Essential')
listings_join_twenty = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: toilets.id, attributable_type: 'Essential')

listings_join_twentytwo = ListingJoin.create!(listing_id: cool_place.id, attributable_id: swimming.id, attributable_type: 'Activity')
listings_join_twentythree = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: swimming.id, attributable_type: 'Activity')
listings_join_twentyfour = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: swimming.id, attributable_type: 'Activity')
listings_join_twentyfive = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: swimming.id, attributable_type: 'Activity')
listings_join_twentysix = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: swimming.id, attributable_type: 'Activity')
listings_join_twentyseven = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: fishing.id, attributable_type: 'Activity')
listings_join_twentyeight = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: fishing.id, attributable_type: 'Activity')
listings_join_twentynine = ListingJoin.create!(listing_id: cool_place.id, attributable_id: fishing.id, attributable_type: 'Activity')
listings_join_thirty = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: fishing.id, attributable_type: 'Activity')
listings_join_twentyone = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: fishing.id, attributable_type: 'Activity')

listings_join_thirtysix = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: waterfall.id, attributable_type: 'Terrain')
listings_join_thirtyseven = ListingJoin.create!(listing_id: cool_place.id, attributable_id: waterfall.id, attributable_type: 'Terrain')
listings_join_thirtyeight = ListingJoin.create!(listing_id: outstanding_place.id, attributable_id: waterfall.id, attributable_type: 'Terrain')
listings_join_thirtynine = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: waterfall.id, attributable_type: 'Terrain')
listings_join_fourty = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: waterfall.id, attributable_type: 'Terrain')

listings_join_tthirtyone = ListingJoin.create!(listing_id: strange_place.id, attributable_id: forest.id, attributable_type: 'Terrain')
listings_join_tthirtytwo = ListingJoin.create!(listing_id: unusual_place.id, attributable_id: forest.id, attributable_type: 'Terrain')
listings_join_thirtythree = ListingJoin.create!(listing_id: interesting_place.id, attributable_id: forest.id, attributable_type: 'Terrain')
listings_join_thirtyfour = ListingJoin.create!(listing_id: awesome_place.id, attributable_id: forest.id, attributable_type: 'Terrain')
listings_join_tthirtfive = ListingJoin.create!(listing_id: cool_place.id, attributable_id: forest.id, attributable_type: 'Terrain')