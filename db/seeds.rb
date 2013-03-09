# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Card.create(
  type: 'info',
  description: 'Why is feminism still relevant?'
)

Card.create(
  type: 'info',
  description: "Gender equality still hasn't been solved."
)

Card.create(
  type: 'info',
  description: "Definition feminism"
)