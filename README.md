# Shork

A library to easily create shortcuts in your JavaScript web apps.

## Example

```typescript
registerShortcuts([
	{
		keys: ["Control", "k"],
		action: () => {
            // Open a search or something
		}
	}
]);
```

## Installation

```bash
npm install shork
```

```bash
yarn add shork
```

```bash
pnpm add shork
```

```bash
bun add shork
```

```bash
pmr add shork
```

[Pmr](https://github.com/Dlurak/pmr) is a command line utility to control all package managers with one interface.
