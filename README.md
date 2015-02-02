Github Points
===========

Sum up points tags on github issues page
 - By default assign N points to an issue (N = configurable)
 - Match a regex to label points for an issue (regex is configurable)

Copied from existing plugin "Github Story Points" and updated to run with latest github issues UI https://chrome.google.com/webstore/detail/github-points-story-point/honbjgnddmnmakomlgibfljnhjnhoahj?utm_campaign=en&utm_source=en-et-na-us-oc-webstrfeat&utm_medium=et

## End user setup

1. In Chrome, navigate to `chrome://extensions/` or select the `Window > Extensions` menu item.
2. Check `Developer Mode` checkbox in upper-right corner.
3. Click the `Load Unpacked Extension...` button.
4. Select `manifest.json` from top-level `github_points` directory.

## Developer setup

1. Install `node.js` and `grunt` on your machine.
2. Run `npm install` in the `github_points` project directory
3. Run `grunt watch` to rebuild `build/points.min.js` on file modification.
4. Edit `js/app.js` to modify behavior, and `grunt` will build `build/points.min.js` on every save.
5. Hit `reload` under the `Github Points` extension listing in  `chrome://extensions/` to update the extension.
