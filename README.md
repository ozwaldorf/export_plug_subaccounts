# Export Bip44 sepk256k1 EC keys

this repo contains 2 files, a lib.ts that is copied from plug-controller to create identities, and an index.ts example. This example will read a seedphrase from a file `seed.txt`, and output the first 10 bip44 account pem files to a folder named after the root principal id.

Any bip39 seedphrase will work, from plug, quill, or keysmith

## Running the example

you can run the example with

```
$ echo '<seed phrase>' > seed.txt
$ yarn start
```
