class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
    	t.string :type
    	t.string :position
    	t.string :color
    	t.boolean :captured
    	t.string :player_id
    	t.string :game_id

      t.timestamps
    end
  end
end
