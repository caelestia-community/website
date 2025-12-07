# Caelestia CLI

[Repository Link](https://github.com/caelestia-dots/cli)

The `caelestia` command is the main control script for the ecosystem.

## Installation

### Arch Linux

```bash
yay -S caelestia-cli
```

### Nix

```bash
nix run github:caelestia-dots/cli
```

## Usage

**Global Syntax:**

```bash
caelestia [options] COMMAND
```

### Subcommands

| Command      | Description                             | Example                             |
| :----------- | :-------------------------------------- | :---------------------------------- |
| `shell`      | Start or message the shell.             | `caelestia shell -d` (Daemon mode)  |
| `toggle`     | Toggle a special workspace.             | `caelestia toggle special:term`     |
| `scheme`     | Manage the colour scheme.               | `caelestia scheme set -n dynamic`   |
| `screenshot` | Take a screenshot (uses Slurp).         | `caelestia screenshot`              |
| `record`     | Start a screen recording.               | `caelestia record`                  |
| `clipboard`  | Open clipboard history (uses Cliphist). | `caelestia clipboard`               |
| `emoji`      | Open emoji picker.                      | `caelestia emoji`                   |
| `wallpaper`  | Manage the wallpaper.                   | `caelestia wallpaper set ~/img.jpg` |
| `resizer`    | Window resizer daemon.                  | `caelestia resizer`                 |

### Help

Show help for any command:

```bash
caelestia -h
caelestia wallpaper -h
```

## Configuration

File: `~/.config/caelestia/cli.json`.

**Example Configuration:**

```json
{
  "record": {
    "extraArgs": []
  },
  "theme": {
    "enableTerm": true,
    "enableHypr": true,
    "enableDiscord": true
  },
  "toggles": {
    "communication": {
      "discord": { "enable": true, "match": [{ "class": "discord" }] }
    }
  }
}
```
