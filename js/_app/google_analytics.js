// Google Analytics
if ($config.ga_id) {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
}
else {
    window.ga = function(){};
}

ga('create', $config.ga_id, 'auto');
ga('send', 'pageview');

$(document).ready(function () {
    $('.ui-btn').on('click', function() {
        var label = $(this)[0].textContent;
        ga('send', 'event', 'button', 'click', label);
    });
});
