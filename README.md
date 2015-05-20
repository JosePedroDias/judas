When the web server you're using lies on a resource's file extension and content-type, `judas()` FTW!

## install

    npm install --save judas
    
## usage

```javascript
// require the module
var judas = require('judas');

judas(urlToFetch, localPathWithoutExtension, callback);
// the callback with be called with (err) in case of error or (null, localPathWithExtension) if everything went well
```

Check the `example.js` file for a practical example.
