# [`wifipass.co`](https://wifipass.co)

> Create Apple Wallet passes for your WiFi credentials.

[![WiFi Pass](https://k4m4.dev/static/images/wifipass/readme-screenshot.png)](https://wifipass.co)

## Configuration

### Apple Pass Certificates

1. Create a folder named `components` in the repo's root directory.
1. Follow [these instructions](https://github.com/alexandercerutti/passkit-generator#certificates) to generate your certificate files.
1. Once the files have been generated, place them in the `components` directory.
1. Rename the certificates to `signerCert.pem`, `signerKey.pem`, and `wwdr.pem`.
1. Create a copy of the `.env.example` file and name it `.env`.
1. Add an environment variable for the passphrase that you used when generating the certificates to the `PASS_SIGNER_KEY_PASSPHRASE` variable.

### Firebase

1. Create a new Firebase project in the [Firebase console's project overview page](https://console.firebase.google.com/).
1. Add the project ID to the `FIREBASE_PROJECT_ID` environment variable.
1. Navigate to your project's "Service accounts" settings (`Project Settings > Service accounts`) to generate a public key.
1. Encode the private key using `base64` and add it to your `FIREBASE_PRIVATE_KEY` environment variable.
1. The file that was downloaded when generating the Firebase public key should also include a `client_email` address. Use that for your `FIREBASE_CLIENT_EMAIL` environment variable.
1. In the Firebase console, navigate to the `Realtime Database` page. Copy the database's URL and add it to the `FIREBASE_DB_URL` environmet variable.

## Development

To start a development instance run:

```bash
~/wifipass.co ❯❯❯ npm install
~/wifipass.co ❯❯❯ npm run dev
```

You should then be able to access the webapp at [`http://localhost:3000`](http://localhost:3000).

## License

MIT © [Nikolaos Kamarinakis](https://k4m4.dev/)
