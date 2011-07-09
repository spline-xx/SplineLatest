class PresentationsController < ApplicationController

  before_filter :check_logged_in, :only => [:new, :edit, :update, :destroy]
  # GET /presentations
  # GET /presentations.xml
  def index
    @presentations = Presentation.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @presentations }
    end
  end

  # GET /presentations/1
  # GET /presentations/1.xml
  def show
    @presentation = Presentation.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @presentation }
    end
  end

  # GET /presentations/new
  # GET /presentations/new.xml
  def new
    @presentation = Presentation.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @presentation }
    end
  end

  # GET /presentations/1/edit
  def edit
    @presentation = Presentation.find(params[:id])
  end

  # POST /presentations
  # POST /presentations.xml
  def create
    @presentation = Presentation.new(params[:presentation])
  @presentation.timeline=@presentation.ppt_time
  @presentation.ppt_url="RandyPausch"
    respond_to do |format|
      if @presentation.save
        format.html { redirect_to :action=>"new" }
        format.xml  { render :xml => @presentation, :status => :created, :location => @presentation }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @presentation.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /presentations/1
  # PUT /presentations/1.xml
  def update
    @presentation = Presentation.find(params[:id])

    respond_to do |format|
      if @presentation.update_attributes(params[:presentation])
        format.html { redirect_to(@presentation, :notice => 'Presentation was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @presentation.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /presentations/1
  # DELETE /presentations/1.xml
     def destroy
    @presentation = Presentation.find(params[:id])
    @presentation.destroy
redirect_to '/spline/index'

  end
private
  def check_logged_in
    authenticate_or_request_with_http_basic("Presentation") do |username, password|
      username == "admin" && password == "p"
    end
  end
end

