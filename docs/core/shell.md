# Caelestia Shell

[Repository Link](https://github.com/caelestia-dots/shell)

A Quickshell-based desktop shell for Caelestia Dots, inspired by Illogical Impulsive.

## Installation

### Arch Linux

```bash
yay -S caelestia-shell
```

### Manual Installation

1. **Dependencies**:

   - `caelestia-cli`
   - `quickshell-git`
   - `ddcutil`
   - `brightnessctl`
   - `app2unit`
   - `libcava`
   - `networkmanager`
   - `lm-sensors`
   - `fish`
   - `aubio`
   - `libpipewire`
   - `qt6-declarative`
   - `gcc-libs`

2. **Build**:
   ```bash
   git clone https://github.com/caelestia-dots/shell.git
   cd shell
   cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/
   cmake --build build
   sudo cmake --install build
   ```

## Usage

**Start the Shell:**

```bash
caelestia shell -d
```

### IPC Commands

Control the shell status and widgets using `caelestia shell`.

| Target        | Function    | Arguments        | Description             |
| :------------ | :---------- | :--------------- | :---------------------- |
| **drawers**   | `toggle`    | `drawer: string` | Toggle a UI drawer      |
|               | `list`      |                  | List available drawers  |
| **notifs**    | `clear`     |                  | Clear all notifications |
| **lock**      | `lock`      |                  | Lock the screen         |
|               | `unlock`    |                  | Unlock the screen       |
|               | `isLocked`  |                  | Check lock status       |
| **mpris**     | `playPause` |                  | Toggle media playback   |
|               | `play`      |                  | Play media              |
|               | `pause`     |                  | Pause media             |
|               | `next`      |                  | Next track              |
|               | `previous`  |                  | Previous track          |
| **wallpaper** | `set`       | `path: string`   | Set shell wallpaper     |

**Example:**

```bash
caelestia shell mpris playPause
```

## Configuration

File: `~/.config/caelestia/shell.json`.

**Custom Wallpaper Path:**

```json
{
  "wallpaper_path": "~/Pictures/Wallpapers"
}
```

## Troubleshooting

- **Screen Flickering**: Disable VRR in `~/.config/caelestia/hypr-user.conf` (`misc { vrr = 0 }`).
- **No Wallpapers**: Ensure `~/Pictures/Wallpapers` exists and has images.
