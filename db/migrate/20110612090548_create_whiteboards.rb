class CreateWhiteboards < ActiveRecord::Migration
  def self.up
    create_table :whiteboards do |t|
      t.decimal :timeline
      t.string :wb_url
      t.decimal :wb_time
      t.string :topic

      t.timestamps
    end
  end

  def self.down
    drop_table :whiteboards
  end
end
