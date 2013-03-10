# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Card.delete_all
Card.create(
  :card_type => 'qa',
  :description => "What does feminism mean?",
  :answers => {
    "Women should have more rights than men" => false,
    "Women and men should have equal rights" => true,
    "Equal rights for lesbians" => false
  },
  :tweet_text => "Feminism means working towards equality by fighting for womeni's rights"
)

Card.create(
  :card_type => 'qa',
  :description => "Who can be a feminist?",
  :answers => {
    "Anywone who wants to" => true,
    "Women only" => false,
    "Hippies" => false
  },
  :tweet_text => "Everyone who believes in gender equality can call themselves a feminist, whatever gender they are",
)

Card.create(
  :card_type => 'info',
  :description => "The bonfire of bras was actually a media invention; no lingerie was ever singed in the name of feminism.",
  :tweet_text => "The bonfire of bras was actually a media invention; no lingerie was ever singed in the name of feminism.",
  :image => "SVGBraBurning.svg"
)

Card.create(
  :card_type => 'qa',
  :description => "What percentage of current world leaders are female?",
  :answers => {
    "9%" => true,
    "24%" => false,
    "33%" => false
  },
  :tweet_text => "Women are consistently underrepresented in government, only 9% of current world leaders are female"
)

Card.create(
  :card_type => 'info',
  :description => "Women invented beer! In medieval times, brides made/sold beer on their big days. 'Bridal' comes from 'Bride Ale'.",
  :tweet_text => "Women invented beer! In medieval times, brides made/sold beer on their big days. 'Bridal' comes from 'Bride Ale'.",
  :image => "SVGBridal.svg"
)

Card.create(
  :card_type => 'info',
  :description => "In the UK's Top 250 companies, only 7.8% of board members are women.",
  :tweet_text => "In the UK's Top 250 companies, only 7.8% of board members are women.",
  :image => "SVGWomenOnBoards.svg"
)

Card.create(
  :card_type => 'video',
  :video => "39sJy7dJFK0",
  :tweet_text => "Great video demonstrating the glass ceiling for women in senior management #GenderEquality"
)

Card.create(
  :card_type => 'qa',
  :description => "Compared to men, how likely are women to attempt suicide?",
  :answers => {
    "Half as likely." => false,
    "Just as likely." => false,
    "Twice as likely." => true
  },
  :tweet_text => "While female suicide attempts are unfortunately twice as likely as men, 3/4 of successful suicides are men."
)

Card.create(
  :card_type => 'info',
  :description => "In 1973, Billy Riggs challenged Billy Jean King to a tennis match 'of the sexes'. 5m watched. She won.",
  :tweet_text => "In 1973, Billy Riggs challenged Billy Jean King to a tennis match 'of the sexes'. 5m watched. She won.",
  :image => "SVGTennis.svg"
)

Card.create(
  :card_type => 'qa',
  :description => "How many more hours a week than men do working women spend on household chores?",
  :answers => {
    "2" => false,
    "6" => false,
    "17" => true
  },
  :tweet_text => "Despite improving equality at work, women still do a disproportionate amount of the housework."
)

Card.create(
  :card_type => 'info',
  :description => "In 1990, NASA ordered new space-suits in medium and large. No suits for females (or small men).",
  :tweet_text => "In 1990, NASA ordered new space-suits in medium and large. No suits for females (or small men).",
  :image => "SVGAstronaut.svg"
)
