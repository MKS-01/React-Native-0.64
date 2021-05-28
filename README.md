# PARTY APP

- React-Navigation v5
- css-in-js : [styled-componeng](https://styled-components.com)
- GraphQL Client - [Apollo Client](https://www.apollographql.com/docs/react)
- Network Check - [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)

```sh
$ npx pod-install
$ npx react-native start
$ npx react-native run-ios
$ npx react-native run-android
```

### File Structure

```
src
├── assets
│   ├── fonts
│   └── images
├── components
│   └── common
│       ├── Error
│       │   └── index.js
│       └── Loader
│           └── index.js
├── navigations
│   ├── AppNavigator.js
│   ├── AuthNavigator.js
│   ├── RootNavigation.js
│   └── index.js
├── scenes
│   ├── Account
│   │   └── index.js
│   ├── History
│   │   └── index.js
│   ├── Home
│   │   ├── EventPage
│   │   │   └── index.js
│   │   └── index.js
│   ├── Saved
│   │   └── index.js
│   ├── SignIn
│   │   └── index.js
│   └── Splash
│       └── index.js
├── services
│   └── GraphQL
│       └── index.js
├── styles
│   ├── Home
│   │   └── Feed.js
│   ├── NetworkMessage.js
│   ├── RootView.js
│   ├── colors.js
│   ├── index.js
│   ├── mixins.js
│   └── typography.js
└── utils
    ├── NetworkConnection.js
    └── SecureStorage.js

```

## Navigation

```
├── navigations
│   ├── AppNavigator.js
│   ├── AuthNavigator.js
│   ├── RootNavigation.js
│   └── index.js
```

Auth Screen Like SignUp, Forgot password flow comes under `AuthNavigator.js`

Other Screen Under `AppNavigator.js`

### RESOURCES

- [Apollo Client](https://www.apollographql.com/docs/react)
