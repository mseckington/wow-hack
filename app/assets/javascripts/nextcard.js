var CardCallbackUrl = ""
function nextCard(){
        $($('.active')[0]).removeClass('active').addClass('complete').next().addClass('active').unbind('click').next().click(function() {nextCard()});
        $.post(CardCallbackUrl,{
            "type" : "nextCard",
            "cardnumber" : $(".active").index(),
        })
};
function endCard(){
        $('.card').last().addClass('complete')
};
function playVid(e){
        nextCard()
        $(e.target).parent().next().addClass('display')
        $.post(CardCallbackUrl,{
            "type" : "playVideo",
        })
};
function clickAnswer(e){
    answer = $(e.target);
    console.log(answer)
    if (answer.data('correct') == true){
        answer.parent().parent().next().addClass('display').children('.correctly').addClass('display')
        $.post(CardCallbackUrl,{
            "type" : "answerQuestion",
            "cardnumber" : $(".active").index(),
            "correct" : true
        })
    }else {
        answer.parent().parent().next().addClass('display').children('.incorrectly').addClass('display')
        $.post(CardCallbackUrl,{
            "type" : "answerQuestion",
            "cardnumber" : $(".active").index(),
            "correct" : false
        })
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
