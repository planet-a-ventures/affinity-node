# affinity-node

Node module for [Affinity](https://www.affinity.co/).

> This module is incomplete; not all API endpoints are implemented. It is in
> active development and the API might change without notice. Contributions
> welcome.

_Note_: Currently only supporting [V1](https://api-docs.affinity.co/#introduction). See section on [V2](#v2) below.


## Usage

```js
import { v1: Affinity } from '@planet-a/affinity-node'

const { user } = await new Affinity(YOUR_API_KEY).auth.whoAmI()

console.log(`Hello ${user.firstName} ${user.lastName}`)
```

## Development

> Note on deno: This repository is using [Deno](https://deno.com/) heavily for
> anything dev-related. The resulting node package is meant to be agnostic of
> the runtime used, so there shouldn't be any deno-specific references. For the
> tests, etc. Deno-specific APIs, libraries and imports may be used.

1. Install [nix](https://nixos.org/)
1. Run `nix develop`
1. Run any deno task, e.g. `deno task test`

> Hint: you can do a live run via
> `API_KEY=<your-api-key> deno task snapshot-update` to update snapshots from
> your actual Affinity instance during development. ⚠️ Make sure you do not
> commit any unsanitized data.

### Build the library

1. `nix develop --command deno task build`

### Run tests with coverage

1. `nix develop --command deno task test:coverage`

### Format code

1. `nix develop --command deno task format`

### Lint code

1. `nix develop --command deno task lint`

### Generate documentation

1. `nix develop --command deno task docs`
2. `open ./docs/index.html`

## V2
A preliminary generator for [V2(https://developer.affinity.co/docs/v2/)] can be executed via

```sh
nix develop --command deno task generate-v2-client
```
which will generate an OpenAPI client for Node in Typescript.

> If you have V2 API access, give it a try and report back here, please 🙏.

An up-to-date OpenAPI spec can be downloaded [https://developer.affinity.co/docs/v2/#section/Introduction](here). Drop it into `./openapi` before you run the command above.