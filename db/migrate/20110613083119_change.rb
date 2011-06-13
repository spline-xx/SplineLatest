class Change < ActiveRecord::Migration
  def self.up
    remove_column :presentations, :ppt_time
    add_column :presentations, :ppt_time, :decimal
  end

  def self.down
  end
end

