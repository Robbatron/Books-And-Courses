class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :title
      t.text :body
      t.string :slug

      t.timestamps
    end
  end
end
