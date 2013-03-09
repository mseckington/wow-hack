class Card < ActiveRecord::Base
  validates :type, presence: true
  
  
end
