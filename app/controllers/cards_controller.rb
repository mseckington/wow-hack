class CardsController < ApplicationController

  skip_before_filter :check_session

  def index
    @cards = Card.all
  end

end
