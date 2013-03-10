function nextCard(){
        $($('.active')[0]).removeClass('active').addClass('complete').next().addClass('active').unbind('click').next().click(function() {nextCard()});
};
function endCard(){
        $('.card').last().addClass('complete')
};
function playVid(e){
        nextCard()
        $(e.target).parent().next().addClass('display')
};
function clickAnswer(e){
    answer = $(e.target);
    console.log(answer)
    if (answer.data('correct') == true){
        answer.parent().parent().next().addClass('display').children('.correctly').addClass('display')
    }else {
        answer.parent().parent().next().addClass('display').children('.incorrectly').addClass('display')
    };
    
};
window.onload = function WindowLoad(event) {
        $($('.card')[0]).addClass('active').next().click(function() {nextCard()})
        $('.answer').each(function(b,a){
                $(a).click(function(e){clickAnswer(e)})
        })
        $('.play').each(function(b,a){
                $(a).click(function(e){playVid(e)})
        })
};
