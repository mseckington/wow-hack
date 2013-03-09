class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :type
      t.string :description
      t.text :image
      t.text :answers
      t.string :tweet_text
      t.text :video

      t.timestamps
    end
  end
end
