# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_17_151032) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "listing_joins", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "attributable_id", null: false
    t.string "attributable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attributable_id", "attributable_type"], name: "index_listing_joins_on_attributable_id_and_attributable_type"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "thumbnail", default: "default", null: false
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["title"], name: "index_listings_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "f_name", default: ""
    t.string "l_name", default: ""
    t.string "email", null: false
    t.float "lat", default: 40.7829
    t.float "lng", default: 73.9654
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "zip"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
