/**
 * switchMessageColourChrome namespace.
 */
if ("undefined" == typeof(switchMessageColourChrome)) {
  var switchMessageColourChrome = {};
};


switchMessageColourChrome.overlay = {
  /**
   * Switch between
   * 1) Always using own colours
   * 2) Allow original content colour
   */
  switchColour : function(aEvent) {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                    .getService(Components.interfaces.nsIPrefBranch);
    var value = prefs.getBoolPref("browser.display.use_document_colors");
    prefs.setBoolPref("browser.display.use_document_colors", !value);
  }
};

