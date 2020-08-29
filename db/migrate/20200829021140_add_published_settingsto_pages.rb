class AddPublishedSettingstoPages < ActiveRecord::Migration[6.0]
  def change
    add_column :pages, :published, :boolean
    add_column :pages, :placement, :string, default: "none"
  end
end
