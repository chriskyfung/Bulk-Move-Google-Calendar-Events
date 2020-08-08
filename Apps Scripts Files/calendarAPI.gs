function moveEvents(oldCalId,newCalId, keyword) {
  //var now = new Date();
  var events = Calendar.Events.list(oldCalId, {
    maxResults: 100,
    q: keyword
  });
  var len = events.items.length;
  if (len > 0) {
    for (var i = 0; i < len; i++) {
      var event = events.items[i];
      var msg = Calendar.Events.move(oldCalId, event.id, newCalId);
      Logger.log(msg);
    }
  } else {
    Logger.log('No events found.');
  }
  return len;
}

/**
 * Parses an RFC 3339 date or datetime string and returns a corresponding Date
 * object. This function is provided as a workaround until Apps Script properly
 * supports RFC 3339 dates. For more information, see
 * https://code.google.com/p/google-apps-script-issues/issues/detail?id=3860
 * @param {string} string The RFC 3339 string to parse.
 * @return {Date} The parsed date.
 */
function parseDate(string) {
  var parts = string.split('T');
  parts[0] = parts[0].replace(/-/g, '/');
  return new Date(parts.join(' '));
}