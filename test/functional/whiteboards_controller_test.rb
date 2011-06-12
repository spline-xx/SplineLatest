require 'test_helper'

class WhiteboardsControllerTest < ActionController::TestCase
  setup do
    @whiteboard = whiteboards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:whiteboards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create whiteboard" do
    assert_difference('Whiteboard.count') do
      post :create, :whiteboard => @whiteboard.attributes
    end

    assert_redirected_to whiteboard_path(assigns(:whiteboard))
  end

  test "should show whiteboard" do
    get :show, :id => @whiteboard.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @whiteboard.to_param
    assert_response :success
  end

  test "should update whiteboard" do
    put :update, :id => @whiteboard.to_param, :whiteboard => @whiteboard.attributes
    assert_redirected_to whiteboard_path(assigns(:whiteboard))
  end

  test "should destroy whiteboard" do
    assert_difference('Whiteboard.count', -1) do
      delete :destroy, :id => @whiteboard.to_param
    end

    assert_redirected_to whiteboards_path
  end
end
