# affinity-node

Node module for [Affinity](https://www.affinity.co/).

> This module is incomplete; not all API endpoints are implemented. It is in
> active development and the API might change without notice. Contributions
> welcome.

_Note_: Currently only supporting
[V1](https://api-docs.affinity.co/#introduction). Contributions for V2 are
welcome, too!

## Usage

```js
import { v1: Affinity } from '@planet-a/affinity-node'

const { user } = await new Affinity(YOUR_API_KEY).auth.whoAmI()

console.log(`Hello ${user.firstName} ${user.lastName}`)
```

## Development

1. Install [nix](https://nixos.org/)
1. Run `nix develop`
1. Run any deno task, e.g. `deno task test`

> Hint: you can do a live run via
> `API_KEY=<your-api-key> deno task snapshot-update` to update snapshots from
> your actual Affinity instance during development. ⚠️ Make sure you do not
> commit any unsanitized data.
