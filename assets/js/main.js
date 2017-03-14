(function (window, document, $) {
    'use strict';

    var txtTarget = $('#cover p');
    var txt = txtTarget.html();
    var leng = txt.length;
    var timer = '';
    var cnt = 0;

    $(window).load(function() {
      typing();
    }
    
    function typing(){
      txtTarget.html(txt.substring(0, cnt)+'<span class="type_bar">_</span>');
      cnt++;
      timer = setTimeout('typing()',100);
      if(leng < cnt){
        clearTimeout(timer);
            cnt = 0;
        }
    }

})(window, window.document, window.jQuery);
