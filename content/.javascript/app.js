(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);var CardCallbackUrl = ""
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
        $($('.card')[1]).click(function() {nextCard()})
        $('.answer').each(function(b,a){
                $(a).click(function(e){clickAnswer(e)})
        })
        $('.play').each(function(b,a){
                $(a).click(function(e){playVid(e)})
        })
};
