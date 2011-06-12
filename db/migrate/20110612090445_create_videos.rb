class CreateVideos < ActiveRecord::Migration
  def self.up
    create_table :videos do |t|
      t.decimal :timeline
      t.string :video_url
      t.decimal :video_time
      t.string :topic

      t.timestamps
    end
  end

  def self.down
    drop_table :videos
  end
end
