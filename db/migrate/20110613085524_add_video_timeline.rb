class AddVideoTimeline < ActiveRecord::Migration
  def self.up
    add_column :videos, :timeline, :string
  end

  def self.down
  end
end

