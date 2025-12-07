# Caelestia Theme (Core)

[Repository Link](https://github.com/caelestia-dots/caelestia)

The core repository for Caelestia Dots, containing the Hyprland config and installation scripts.

## Installation

### Automatic Install (recommended)

Clone the repo and run the install script. **Warning**: This symlinks configs and may overwrite existing files.

```bash
git clone https://github.com/caelestia-dots/caelestia.git ~/.local/share/caelestia
cd ~/.local/share/caelestia
./install.fish
```

**Install Script Options:**
| Option | Description |
| :--- | :--- |
| `--spotify` | Install Spicetify |
| `--vscode` | Install VSCode integrations |
| `--discord` | Install Discord themes |
| `--zen` | Install Zen Browser config |

### Manual Installation

**Required Packages:**

**Required Packages:**

> **Window Manager**
>
> - `hyprland`
> - `xdg-desktop-portal-hyprland`
> - `xdg-desktop-portal-gtk`

> **Tools**
>
> - `hyprpicker`
> - `wl-clipboard`
> - `cliphist`
> - `inotify-tools`
> - `app2unit`
> - `wireplumber`
> - `trash-cli`

> **Terminal**
>
> - `foot`
> - `fish`
> - `fastfetch`
> - `starship`
> - `btop`
> - `jq`
> - `eza`

> **Theming**
>
> - `adw-gtk-theme`
> - `papirus-icon-theme`
> - `qt5ct-kde`
> - `qt6ct-kde`
> - `ttf-jetbrains-mono-nerd`

**Steps:**

1. Install all dependencies.
2. Symlink folders to `$XDG_CONFIG_HOME` (`~/.config`):
   - `hypr` -> `~/.config/hypr`
   - `foot` -> `~/.config/foot`
   - `fish` -> `~/.config/fish`
   - `fastfetch` -> `~/.config/fastfetch`
   - `uwsm` -> `~/.config/uwsm`
   - `btop` -> `~/.config/btop`

## Updating

Run `yay` to update packages, then pull the latest changes:

```bash
cd ~/.local/share/caelestia
git pull
```

## Keybinds

| Key Combination            | Action                                |
| :------------------------- | :------------------------------------ |
| **Super**                  | Open Launcher (Fuzzel/Shell Launcher) |
| **Super + T**              | Open Terminal (Foot)                  |
| **Super + W**              | Open Browser (Zen)                    |
| **Super + C**              | Open IDE (VSCode)                     |
| **Super + S**              | Toggle Special Workspace              |
| **Ctrl + Super + Space**   | Toggle Media Play/Pause               |
| **Ctrl + Super + Alt + R** | Restart Shell/Hyprland                |
| **Super + [Number]**       | Switch to Workspace [Number]          |
| **Super + Alt + [Number]** | Move Window to Workspace [Number]     |
| **Ctrl + Alt + Delete**    | Open Session Menu                     |
