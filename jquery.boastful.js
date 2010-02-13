(function ($) {
  $.fn.boastful = function(){
    var output = $(this)

    function format_tweetback(tweetback) {
      formatted  = ''
      formatted += '<div class="boastful">'
      formatted +=   '<a href="'+tweetback.permalink_url+'">'
      formatted +=     '<img src="'+tweetback.author.photo_url+'" />'
      formatted +=   '</a>'
      formatted +=   '<div class="boastful_pointer"></div>'
      formatted +=   '<div class="boastful_tweet" style="display: none">'
      formatted +=     '<div class="boastful_handle">@'+tweetback.author.url.split('/').pop()+'</div>'
      formatted +=     '<div class="boastful_content">'+tweetback.content+'</div>'
      formatted +=   '</div>'
      formatted += '</div>'
      return formatted
    }

    var parse_request = function(data){
      $.each(data.response.list, function(i,tweetback){
        output.append(format_tweetback(tweetback))
        $('.boastful').mouseover(function(){ $(this).children('.boastful_tweet, .boastful_pointer').show() })
        $('.boastful').mousemove(function(kmouse){ 
          $(this).children('.boastful_tweet').css({
            left:$(this).position().left-105, 
            top:$(this).position().top+25
          })
          $(this).children('.boastful_pointer').css({
            left:$(this).position().left+18, 
            top:$(this).position().top+15
          })
        })
        $('.boastful').mouseout(function(){ $(this).children('.boastful_tweet, .boastful_pointer').hide() })
      });
    }
    
    $.ajax({
      url:'http://otter.topsy.com/trackbacks.js',
      data:
        {url: location.href},
      success:parse_request,
      dataType:'jsonp'}
    );
    
    return this
  }
})(jQuery);