require 'spec_helper'

describe "products/edit.html.haml" do
  before(:each) do
    @product = assign(:product, stub_model(Product,
      :name => "MyString",
      :price => "9.99",
      :quantity => 1,
      :description => "MyText"
    ))
  end

  it "renders the edit product form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => products_path(@product), :method => "post" do
      assert_select "input#product_name", :name => "product[name]"
      assert_select "input#product_price", :name => "product[price]"
      assert_select "input#product_quantity", :name => "product[quantity]"
      assert_select "textarea#product_description", :name => "product[description]"
    end
  end
end