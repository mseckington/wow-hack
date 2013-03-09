# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Card.delete_all
Card.create(
  :card_type => 'info',
  :description => 'Why is feminism still relevant?'
)

Card.create(
  :card_type => 'info',
  :description => 'Gender equality is still an issue.'
)

Card.create(
  :card_type => 'info',
  :description => 'Definition of feminism'
)