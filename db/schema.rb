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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110613085524) do

  create_table "comments", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.text     "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "presentations", :force => true do |t|
    t.string   "ppt_url"
    t.string   "ppt_topic"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "timeline"
    t.decimal  "ppt_number"
    t.decimal  "ppt_time"
  end

  create_table "videos", :force => true do |t|
    t.string   "video_url"
    t.string   "topic"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "video_time"
    t.string   "timeline"
  end

  create_table "whiteboards", :force => true do |t|
    t.decimal  "timeline"
    t.string   "wb_url"
    t.decimal  "wb_time"
    t.string   "topic"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
