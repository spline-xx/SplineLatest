 $(function(){
            // Fast and dirty
            $('article.tabs section > h3').click(function(){
                $('article.tabs section').removeClass('current');
                $(this)
                .closest('section').addClass('current');
          });
   });

  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
  try {
            var pageTracker = _gat._getTracker("UA-6539535-1");
            pageTracker._trackPageview();
  } catch(err) {}

