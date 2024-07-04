# authr.js

Authr.js is a modern authentication library designed to make integrating OAuth providers into your applications easier and more secure.

## Installation

Install authr.js using npm:

```sh
npm install authr.js
```

## Providers
- [Discord](https://github.com/slxca/authr.js/wiki/Implement-Discord-Authentication)
- [GitHub](https://github.com/slxca/authr.js/wiki/Implement-GitHub-Authentication)
- [Google](https://github.com/slxca/authr.js/wiki/Implement-Google-Authentication)

## Usage

To use authr.js with GitHub OAuth, you need to create a `GitHubProvider` instance with your client settings:

```ts
import { GitHubProvider } from 'authr.js';

const githubProvider = new GitHubProvider({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'YOUR_REDIRECT_URI',
  scopes: ['user'],
  allowSignup: true
});

// Redirect user to GitHub for authentication
window.location.href = githubProvider.getAuthUri();
```

After the user is redirected back to your application, use the code parameter from the query string to request an access token:

```ts
const accessToken = await githubProvider.getAccessToken('CODE_FROM_QUERY_STRING');
```

You can then use the access token to fetch user profile information:

```ts
const profile = await githubProvider.getProfile(accessToken);
```

## Documentation

For more detailed documentation, visit [authr.js documentation](https://authr.js.org).

## Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/slxca/authr.js/blob/master/CONTRIBUTING.md) before submitting pull requests.

## License

authr.js is MIT licensed. See the [LICENSE](https://github.com/slxca/authr.js/blob/master/LICENSE) file for more details.

## Support

If you need help or have any questions, please open an issue on our [GitHub repository](https://github.com/slxca/authr.js/issues).
