# README

MystiCamp
=
[MystiCamp Live Site](https://mysticamp.herokuapp.com/)

Thank you for visiting MystiCamp. MystiCamp is a single-page, full stack clone of [HipCamp.com](https://www.hipcam.com). Users can view listings, see their locations, and view the attributes of each listing, search listings by location, and make bookings.

<img src="https://ootd-dev.s3.amazonaws.com/mysticamp-search-screen-shot1.png">

Technologies Implemented:
=
- ### Front End: 
   - React
   - Redux
   - Google Maps API
   - Javascript
   - HTML5
   - CSS3/SCSS

 - ### Back End:
   - PostgreSQL
   - Ruby on Rails

Features:
=
 - ### User Authenication
   - User Auth created using BCrypt 
   - Users can securely create an account and log in/log out with ease
   - Demo user log in available for guests
   - Viewing/deleting bookings is only available under a protected route while logged in
 - ### Listings index page
   - View thumbnail of each listing
   - View subtitle of each listing
   - Search listings based on location
 - ### Listing show page
   - View listing attributes
   - View listing location on Google Maps
   - Make a booking for the listing
 - ### User Bookings
   - Logged in user can view their current bookings
   - Logged in user can cancel any current booking
<img src='app/assets/images/mc_book.gif'/>

### One interesting feature worth noting is the polymorphic association implemented like so:
```ruby
class Listing < ApplicationRecord
    belongs_to :host,
        class_name: :User

    has_many :listing_joins
    has_many :amenities, through: :listing_joins, source: :attributable, source_type: 'Amenity'
    has_many :essentials, through: :listing_joins, source: :attributable, source_type: 'Essential'
    has_many :activities, through: :listing_joins, source: :attributable, source_type: 'Activity'
    has_many :terrains, through: :listing_joins, source: :attributable, source_type: 'Terrain'
end

class Amenity < ApplicationRecord
    has_many :listing_joins, as: :attributable
    has_many :listings, through: :listing_joins
end

class ListingJoin < ApplicationRecord
    belongs_to :attributable, polymorphic: true
    belongs_to :listing
end
```
This is implemented so that backend and database management will be more clean and manageable.


### Search feature utilizes Google Maps Places Autocomplete, Geocoder, and Javascript Promises:
```Javascript
findGeocode(location) {
  return new Promise(function(resolve, reject) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': location}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        resolve([lat, lng]);
      } else {
        reject(new Error('location error'));
      };
    });
  });
};

handleSubmit(e) {
  e.preventDefault();
  this.props.receiveLocation(this.state);
  const locationData = this.processGeocode(this.state.searchLocation, this.findGeocode);
  Promise.all(locationData)
    .then((returnData) => { this.navigateToListingIndex(returnData);
  })
};
```
<img src="https://ootd-dev.s3.amazonaws.com/mysticamp-searchmap-screen-shot.png">


## Future Features Include:

- User reviews on listings


<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover: -->

<!-- * Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
