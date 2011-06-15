class ChatsController < ApplicationController
  # GET /chats
  # GET /chats.xml
  def index
    
  end
  def send_data
    render :juggernaut do |page|
      page.alert('hi')
    end
    render_juggernaut(:action => 'whatever')
  end
  def create
    
  end
end
