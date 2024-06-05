# affinity-node

Node module for [Affinity](https://www.affinity.co/).

> This module is [incomplete](#api-completeness); not all API endpoints are
> implemented. It is in active development and the API might change without
> notice. Contributions welcome.

_Note_: Currently only supporting
[V1](https://api-docs.affinity.co/#introduction). See section on [V2](#v2)
below.

## Usage

```js
import { v1: Affinity } from '@planet-a/affinity-node'

const { user } = await new Affinity(YOUR_API_KEY).auth.whoAmI()

console.log(`Hello ${user.firstName} ${user.lastName}`)
```

## API completeness

### V1

- ✅ [Lists](src/v1/lists.ts)
- ✅ [List Entries](src/v1/list_entries.ts)
- ✅ [Fields](src/v1/fields.ts)
- ✅ [Field Values](src/v1/field_values.ts)
- ✅ [Field Value Changes](src/v1/field_value_changes.ts)
- ❌ [Persons](src/v1/persons.ts)
- ✅ [Organizations](src/v1/organizations.ts)
- ❌ [Opportunities](src/v1/opportunities.ts)
- ❌ Interactions
- ❌ Relationship Strengths
- ❌ Notes
- ❌ Entity Files
- ❌ Reminders
- ❌ Webhooks
- ✅ [Whoami](src/v1/auth.ts)
- ✅ [Rate Limit](src/v1/rate_limit.ts)

### V2

A preliminary generator for [V2](https://developer.affinity.co/docs/v2/) can be
executed via

```sh
nix develop --command deno task generate-v2-client
```

which will generate an OpenAPI client for Node in Typescript.

> If you have V2 API access, give it a try and report back here, please 🙏.

An up-to-date OpenAPI spec can be downloaded from
[here](https://developer.affinity.co/docs/v2/#section/Introduction). Drop it
into `./openapi` before you run the command above (remove the old version
beforehand).

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
> your actual Affinity instance during development.
>
> ⚠️ Make sure you do not commit any unsanitized data.

### Direnv

This repo is [direnv](https://direnv.net/)-enabled. If you have Nix and direnv
on your system, you can ignore any `nix develop --command` prefixes and just
work in the folder as if you were inside the nix flake environment. This is the
recommended way, as it greatly simplifies the handling of dev tasks and
pre-commit checks.

### Commands

#### Build the library

1. `nix develop --command deno task build`

#### Run tests with coverage

1. `nix develop --command deno task test:coverage`

#### Format code

1. `nix develop --command deno task format`

#### Lint code

1. `nix develop --command deno task lint`

#### Generate documentation

1. `nix develop --command deno task docs`
2. `open ./docs/index.html`

### Style

- File names are `snake_case`
- Symbols are `camelCase`
- Symbols inherited from the Affinity API documentation, such as path and query
  parameters adopt the API documentation style, `snake_case`
- Enum values are `SNAKE_UPPERCASE`

### Commits

This repo follows the
[conventional commits](https://www.conventionalcommits.org/) format. Run
`nix develop --command cz commit` after staging some changes to be guided
through the process if you're unfamiliar with it.

### Pre commit hooks

Pre-commit hooks are managed by Nix. Once you run your commit, it will analyze
the changes and run required hooks.
