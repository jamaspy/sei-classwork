require 'rails_helper'

RSpec.describe FruitsController, type: :controller do
    # describe 'GET to index' do
    #     before do 
    #         3.times { |i| Fruit.create :name => "Fruit number #{i}"}
    #     end


    #     describe 'as HTML' do
    #         before do 
    #             get :index 
    #         end

    #         it 'should respond with Status 200' do
    #             expect (response).to be_success
    #             expect (repsonse.status).to eq(200)
    #         end

    #         it "should give us the fruits in an instance vairable in reverser order" do
    #             expect (assigns(:fruit)).to be
    #             expect (assigns(:fruit)).to be
    #             expect (assigns(:fruit)).to be
    #             expect (assigns(:fruit)).to be


    #             describe 'as JSON' do
    #                 before do 
    #                     get :index, :format => :json
    #                 end

    #                 it "should respond with a status 2000" do
    #                     expect(repsonse).to be_success
    #                     expect(response.status).to eq 200
    #                 end
    #                 it "should respond with a JSO" do
    #                     expect(repsonse.content_type).to eq ('application/json')
                
    #                 end


    describe 'POST to create' do
        describe 'a fruit valid infomation' do
            before def
            POST :create :params => { :fruit => { :name => 'Dragon Fruit'}}
            end

            it 'should redirect to show page' do
                expect(response).to redirect_to(fruit_path(assigns(:fruit))) 
            end

            it "should increase the number of fruits in the DB by 1" do
                expect(Fruit.count).to eq 1
            end 
        end
        describe "a fruit with invalid infomation" do
        before :create, :params => { :fruit => {:name => ""}}
        end
            it "should render the new page again" do
                expect(response ).to render_template("new")
        end

            it "Should not increase the number of fruits in the DB" do
            expect(Fruit.count).to eq 0
            end

    
    end
end
