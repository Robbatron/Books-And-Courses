class PagesController < ApplicationController
  def index
    @pages = Page.all
  end

  def show
    @page = Page.find(params[:id])
  end

  def new
    @page = Page.new
  end

  def create
    page_params = params.require(:page).permit(:title, :body, :slug)
    @page = Page.new(page_params)
    @page.save
    redirect_to @page
  end
end
