require 'spec_helper'

describe BasicPageController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'blog'" do
    it "returns http success" do
      get 'blog'
      response.should be_success
    end
  end

  describe "GET 'resume'" do
    it "returns http success" do
      get 'resume'
      response.should be_success
    end
  end

  describe "GET 'about'" do
    it "returns http success" do
      get 'about'
      response.should be_success
    end
  end

end
