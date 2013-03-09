function nextCard(){
        $($('.active')[0]).removeClass('active').addClass('complete').next().addClass('active').unbind('click').next().click(function() {nextCard()});
};
function endCard(){
        $('.card').last().addClass('complete')
};
function playVid(e){
        nextCard()
        console.log($(e.target).parent().next().addClass('display'))
};

window.onload = function WindowLoad(event) {
        $($('.card')[0]).addClass('active').next().click(function() {nextCard()})
        $('.play').each(function(b,a){
                $(a).click(function(e){playVid(e)})
        })
};
