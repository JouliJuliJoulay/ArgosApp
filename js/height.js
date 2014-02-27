$(document).ready(function () { 
alert ('123'); 

document.addEventListener('deviceready', function () {
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                "Workshop", // title
                'OK'        // buttonName
            );
        };
    }
}, false);
});


// $(document).on('pagechange', function() {
  // $('.ui-listview').listview('refresh');
  // $('.ui-page-active :jqmData(role=content)').trigger('create');
// });


// $(document).on('pageshow', '#index', function(){  
    // $.mobile.activePage.find('.ui-content').height(getRealContentHeight());
// });

// function getRealContentHeight() {
    // var header = $.mobile.activePage.find("div[data-role='header']:visible");
    // var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
    // var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
    // var viewport_height = $(window).height();
    
    // var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
    // if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
        // content_height -= (content.outerHeight() - content.height());
    // } 
    // return content_height;
};