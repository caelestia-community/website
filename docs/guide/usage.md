# Usage

The shell can be started via the `caelestia shell -d` command or `qs -c caelestia`.

If the entire caelestia dots are installed, the shell will be autostarted on login via an `exec-once` in the Hyprland config.

## Shortcuts / IPC

All keybinds are accessible via Hyprland [global shortcuts](https://wiki.hyprland.org/Configuring/Binds/#dbus-global-shortcuts). If using the entire caelestia dots, the keybinds are already configured for you. Otherwise, [this file](https://github.com/caelestia-dots/caelestia/blob/main/hypr/hyprland/keybinds.conf#L1-L39) contains an example on how to use global shortcuts.

All IPC commands can be accessed via `caelestia shell ...`. For example:

```sh
caelestia shell mpris getActive trackTitle
```

The list of IPC commands can be shown via `caelestia shell -s`:

```
$ caelestia shell -s
target drawers
  function toggle(drawer: string): void
  function list(): string
target notifs
  function clear(): void
target lock
  function lock(): void
  function unlock(): void
  function isLocked(): bool
target mpris
  function playPause(): void
  function getActive(prop: string): string
  function next(): void
  function stop(): void
  function play(): void
  function list(): string
  function pause(): void
  function previous(): void
target picker
  function openFreeze(): void
  function open(): void
target wallpaper
  function set(path: string): void
  function get(): string
  function list(): string
```

## PFP / Wallpapers

The profile picture for the dashboard is read from the file `~/.face`. To set it, you can copy your image to that location or set it via the dashboard.

The wallpapers for the wallpaper switcher are read from `~/Pictures/Wallpapers` by default. To change it, change the wallpapers path in `~/.config/caelestia/shell.json`.

To set the wallpaper, you can use the command `caelestia wallpaper`. Use `caelestia wallpaper -h` for more info about the command.

## Updating

If installed via the AUR package, simply update your system (e.g. using `yay`).

If installed manually, you can update by running `git pull` in `$XDG_CONFIG_HOME/quickshell/caelestia`.

```sh
cd $XDG_CONFIG_HOME/quickshell/caelestia
git pull
```
