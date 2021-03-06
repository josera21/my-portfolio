class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :name
      t.text :description
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
