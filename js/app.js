(function() {
  'use strict'
  var _prevUrl = null;
  var updatePoints = function(url) {
    var issuesMatch = url.match(/issues/g);
    var $toolbar = $('#js-issues-toolbar');
    if (issuesMatch && $toolbar.length) {
      var total = 0;
      _.each($('.issue-title > span > a.label'), function(label) {
        var text = $(label).text().trim();
        var pointsMatch = /^points-(\d+)$/g.exec(text);
        if(pointsMatch) {
          total += parseInt(pointsMatch[1]);
        }
      });
      var $left = $toolbar.find(".table-list-header-toggle.states.left");
      var $status = $left.find("#points-status");
      if (!$status.length) {
        $left.append("<div id='points-status'>" + total + " pts</div>");
      } else {
        alert("reusing status?!!");
        $status.text(total + " pts");
      }
    }
  };

  $(function() {
    setInterval(function() {
      var url = window.location.href;
      if(url != _prevUrl) {
        _prevUrl = url;
        if ($(".context-loader").hasClass("is-context-loading")) {
          _prevUrl = null; //redo after loading complete
        } else {
          updatePoints(url);
        }
      }
    }, 500);
  });
})();
