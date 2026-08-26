# symplehost

Official **SympleHost** CLI — query the [SympleHost Partner API](https://help.symplehost.ai/developers) (reservations, transactions, properties, conversations) from the terminal. Zero dependencies, Node 20+.

SympleHost is an AI co-host and property management system for short-term and vacation rentals — guest messaging, dynamic pricing, channel manager, direct bookings, and operations. [www.symplehost.ai](https://www.symplehost.ai)

## Install

```bash
npm install -g symplehost
```

## Auth

HTTP Basic with a partner key (read-only, non-sensitive scopes — sensitive scopes require HMAC signing; see the [Partner API docs](https://help.symplehost.ai/partner-api.html)):

```bash
export SYMPLEHOST_KEY_ID=key_...
export SYMPLEHOST_SECRET=...
```

Partner keys: [partners@symplehost.ai](mailto:partners@symplehost.ai)

## Usage

```bash
symplehost reservations                 # list (paginated)
symplehost reservations res_123         # one record
symplehost transactions --limit 50
symplehost properties
symplehost conversations --cursor eyJ…  # continue from meta.next_cursor
symplehost openapi                      # print the OpenAPI 3.1 contract
symplehost docs                         # developer documentation links
```

Responses are the raw Partner API JSON (`data` / `meta.next_cursor` / `errors[]` envelope), pretty-printed — pipe into `jq` for scripting.

## Links

- Developer hub: https://help.symplehost.ai/developers
- Partner API reference: https://help.symplehost.ai/partner-api.html
- OpenAPI spec: https://help.symplehost.ai/openapi.json
- Knowledge base for agents: https://help.symplehost.ai/llms.txt
