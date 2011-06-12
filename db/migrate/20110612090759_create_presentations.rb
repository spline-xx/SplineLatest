class CreatePresentations < ActiveRecord::Migration
  def self.up
    create_table :presentations do |t|
      t.decimal :timeline
      t.string :ppt_url
      t.decimal :ppt_time
      t.string :ppt_topic

      t.timestamps
    end
  end

  def self.down
    drop_table :presentations
  end
end
