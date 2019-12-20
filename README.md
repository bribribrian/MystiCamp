# README

MystiCamp
=

Thank you for visiting MystiCamp. MystiCamp is a single-page, full stack clone of Hipcamp. Users can view listings, see their locations, and view the attributes of each listing.

Technologies Implemented:
=
- ### Front End: 
   - React
   - Redux

 - ### Back End:
   - PostgreSQL
   - Ruby on Rails

Features:
=
 - ### User Authenication
   - Users can securely create an account and log in/log out with ease
   - Demo user log in available for guests
 - ### Listings index page
   - View thumbnail of each listing
   - View subtitle of each listing
 - ### Listing show page
   - View listing attributes
   - View listing location 


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

---
## Future Features Include:
- Search by location
- User bookings
- User comments


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
