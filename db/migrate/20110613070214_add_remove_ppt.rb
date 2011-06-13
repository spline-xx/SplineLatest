class AddRemovePpt < ActiveRecord::Migration
  def self.up
    
    remove_column :presentations, :ppt_time
    remove_column :presentations, :timeline
    add_column :presentations, :timeline, :string
    add_column :presentations, :ppt_time, :string
    add_column :presentations, :ppt_number, :number
    
  end

  def self.down
  end
end
