class Card < ActiveRecord::Base
  validates :card_type, presence: true
  
  attr_accessible :card_type, :description, :image, :answers, :tweet_text, :video
end
