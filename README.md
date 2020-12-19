[![npm](https://img.shields.io/npm/v/vue-gapi.svg)](https://www.npmjs.com/package/vue-gapi) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

# VueGapi

[Google API Client Library](https://github.com/google/google-api-javascript-client) wrapper for [Vue.js](https://vuejs.org/)

## Installation

```bash
npm install --save vue-gapi
```

or

```
yarn add vue-gapi
```

## Usage

Installing the plugin with [`gapi.client.init`](https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientinitargs--) configuration parameters:

```js
import Vue from 'vue'
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: '<YOUR_API_KEY>',
  clientId: '<YOUR_CLIENT_ID>.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets',
})
```

exposes a `$gapi` member on the Vue instance:

```html
<script>
  export default {
    methods: {
      login() {
        this.$gapi.login().then(({ gapi }) => {
          // gapi.sheets.spreadsheet.get(...)
          // ...
        })
      },
    },
  }
</script>
```

## Reference

See the [generated `GoogleAuthService` documentation](https://vue-gapi.github.io/vue-gapi/GoogleAuthService.html) for a complete reference of the `Vue.$gapi` methods.
