# Installation

> [!NOTE]
> This repo is for the desktop shell of the caelestia dots. If you want installation instructions for the entire dots, head to [the main repo](https://github.com/caelestia-dots/caelestia) instead.

## Arch Linux

> [!WARNING]
> If you want to make your own changes/tweaks to the shell do NOT edit the files installed by the AUR package. Instead, follow the instructions in the [manual installation section](#manual-installation).

The shell is available from the AUR as `caelestia-shell`. You can install it with an AUR helper like [`yay`](https://github.com/Jguer/yay) or by manually downloading the PKGBUILD and running `makepkg -si`.

A package following the latest commit also exists as `caelestia-shell-git`. This is bleeding edge and likely to be unstable or have bugs. Regular users are recommended to use the stable package (`caelestia-shell`).

## Nix

You can run the shell directly via `nix run`:

```sh
nix run github:caelestia-dots/shell
```

Or add it to your system configuration:

```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    caelestia-shell = {
      url = "github:caelestia-dots/shell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
}
```

The package is available as `caelestia-shell.packages.<system>.default`, which can be added to:
- `environment.systemPackages`
- `users.users.<username>.packages`
- `home.packages` (if using home-manager)
- or a devshell.

The shell can then be run via `caelestia-shell`.

> [!TIP]
> The default package does not have the CLI enabled by default, which is required for full functionality. To enable the CLI, use the `with-cli` package.

For home-manager, you can also use the Caelestia's home manager module (explained in [Configuration](./configuration.md)) that installs and configures the shell and the CLI.

## Manual Installation

### Dependencies

- [`caelestia-cli`](https://github.com/caelestia-dots/cli)
- [`quickshell-git`](https://quickshell.outfoxxed.me) - **Must be the git version**
- [`ddcutil`](https://github.com/rockowitz/ddcutil)
- [`brightnessctl`](https://github.com/Hummer12007/brightnessctl)
- [`app2unit`](https://github.com/Vladimir-csp/app2unit)
- [`libcava`](https://github.com/LukashonakV/cava)
- [`networkmanager`](https://networkmanager.dev)
- [`lm-sensors`](https://github.com/lm-sensors/lm-sensors)
- [`fish`](https://github.com/fish-shell/fish-shell)
- [`aubio`](https://github.com/aubio/aubio)
- [`libpipewire`](https://pipewire.org)
- `glibc`
- `qt6-declarative`
- `gcc-libs`
- [`material-symbols`](https://fonts.google.com/icons)
- [`caskaydia-cove-nerd`](https://www.nerdfonts.com/font-downloads)
- [`swappy`](https://github.com/jtheoof/swappy)
- [`libqalculate`](https://github.com/Qalculate/libqalculate)
- [`bash`](https://www.gnu.org/software/bash)
- `qt6-base`
- `qt6-declarative`

### Build Dependencies

- [`cmake`](https://cmake.org)
- [`ninja`](https://github.com/ninja-build/ninja)

### Steps

To install the shell manually, install all dependencies and clone this repo to `$XDG_CONFIG_HOME/quickshell/caelestia`. Then simply build and install using `cmake`.

```sh
cd $XDG_CONFIG_HOME/quickshell
git clone https://github.com/caelestia-dots/shell.git caelestia

cd caelestia
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/
cmake --build build
sudo cmake --install build
```

> [!TIP]
> You can customise the installation location via the `cmake` flags `INSTALL_LIBDIR`, `INSTALL_QMLDIR` and `INSTALL_QSCONFDIR`.
