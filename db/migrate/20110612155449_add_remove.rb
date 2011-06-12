class AddRemove < ActiveRecord::Migration
  def self.up
    
    remove_column :videos, :video_time
    remove_column :videos, :timeline
    add_column :videos, :timeline, :string
    add_column :videos, :video_time, :string
 
  end

  def self.down
  end
end
