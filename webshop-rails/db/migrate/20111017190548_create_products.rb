class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price     , precision: 2
      t.integer :quantity
      t.text :description

      t.timestamps
    end
  end
end
