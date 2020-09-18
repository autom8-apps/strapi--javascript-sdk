### TAPROOM DESCRIPTION

This is a duplicated version of the no longer maintained **[strapi javascript sdk](https://github.com/strapi/strapi-sdk-javascript)**

**Now you may be wondering...**

Why duplicate a no longer maintained repository? And that's a question I asked myself, and due to this packages small size, and simple logic, it seemed faster to just duplicate this, throw it in a privde repo / npm package and iterate on it as we go.

We wll be extending upon the current semver set when the project siezed active maintenance.

If you end up using this package, please make sure to follow the same standards used in our **[Developer Guide](https://github.com/the-taproom/developer-guide/tree/main/git-github)** when contributing.

---

Helpful Strapi Resources:
- [**API Endpoints**](https://strapi.io/documentation/3.0.0-beta.x/guides/api-endpoints.html#endpoints)
- [**URL parameters**](https://strapi.io/documentation/3.0.0-beta.x/guides/parameters.html)

---

<p align="center"><img src="https://cldup.com/7umchwdUBh.png" /></p>

<h3 align="center">The official Strapi SDK for JavaScript, available for browsers or Node.js backends.</h3>

---

## Install

```sh
npm install @taproom/strapi-sdk-javascript
```

## Start now

### New instance
```js
import Strapi from '@taproom/strapi-sdk-javascript';

const strapi = new Strapi('http://localhost:1337');
```

### Authentications

#### Local
```js
await strapi.login('username_or_email', 's3cr3t');
```

#### [Providers](https://strapi.io/documentation/guides/authentication.html#providers)
```js
// Redirect your user to the provider's authentication page.
window.location = strapi.getProviderAuthenticationUrl('facebook');
```
Once authorized, the provider will redirects the user to your app with an access token in the URL.
```js
// Complete the authentication: (The SDK will store the access token for you)
await strapi.authenticateProvider('facebook');
```
You can now fetch private APIs
```js
const posts = await strapi.getEntries('posts');
```

### Files management

#### Browser
```js
const form = new FormData();
form.append('files', fileInputElement.files[0], 'file-name.ext');
form.append('files', fileInputElement.files[1], 'file-2-name.ext');
const files = await strapi.upload(form);
```

#### Node.js
```js
const FormData = require('form-data');
const fs = require('fs');
const form = new FormData();
form.append('files', fs.createReadStream('./file-name.ext'), 'file-name.ext');
const files = await strapi.upload(form, {
  headers: form.getHeaders()
});
```


## Functions/Methods

### `Strapi(baseURL, storeConfig, requestConfig)`
### `request(method, url, requestConfig)`
### `register(username, email, password)`
### `login(identifier, password)`
### `forgotPassword(email, url)`
### `resetPassword(code, password, passwordConfirmation)`
### `getProviderAuthenticationUrl(provider)`
### `authenticateProvider(provider, params)`
### `setToken(token, comesFromStorage)`
### `clearToken(token)`
### `getEntries(contentTypePluralized, params)`
### `getEntry(contentTypePluralized, id)`
### `getEntryCount(contentTypePluralized, params)`
### `createEntry(contentTypePluralized, data)`
### `updateEntry(contentTypePluralized, id, data)`
### `deleteEntry(contentTypePluralized, id)`
### `searchFiles(query)`
### `getFiles(params)`
### `getFile(id)`
### `upload(data)`

#### requestConfig

Custom axios request configuration. [See documentation](https://github.com/axios/axios#request-config)

## Resources

* [Documentation](https://strapi.github.io/strapi-sdk-javascript)
* [Changelog](https://github.com/strapi/strapi-sdk-javascript/blob/master/CHANGELOG.md)
* [Medium story](https://medium.com/strapi/announcing-the-strapi-javascript-sdk-ac89f140a9d1)

## Roadmap

* GraphQL
* Attach/Detach entry relationship
* Real time with Socket.io

## Credits

* [axios](https://github.com/axios/axios)
* [typescript-starter](https://github.com/bitjson/typescript-starter)

## License

MIT
