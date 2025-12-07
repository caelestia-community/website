---
layout: home

hero:
  name: "Caelestia Dots"
  text: "The Ultimate Linux Rice"
  tagline: A unified, aesthetic, and powerful desktop environment ecosystem.
  image:
    src: /hero-showcase.gif
    alt: Caelestia Shell Showcase
  actions:
    - theme: brand
      text: Installation Guide
      link: /core/caelestia#installation
    - theme: alt
      text: Browse Components
      link: /core/shell

features:
  - title: 🎨 Unified Aesthetics
    details: A consistent design language across Shell, Terminal, GTK, QT, and Web Apps.
  - title: 🚀 Wayland Native
    details: Built for the future with Hyprland, allowing for buttery smooth animations.
  - title: ⚡ Performance First
    details: Core widgets written in C++ (Quickshell) for maximum efficiency and speed.
  - title: 🛠️ Fully Scriptable
    details: Control every aspect of your desktop via the powerful Caelestia CLI.
  - title: 📦 Extensive Ecosystem
    details: 15+ repositories covering everything from window management to Spotify themes.
  - title: 🤝 Community Driven
    details: Open source and built with contributions from the Linux rising community.
---

## Showcase

<div style="margin-top: 40px; margin-bottom: 40px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
  <video src="/showcase.mp4" autoplay loop muted playsinline controls style="width: 100%; height: auto; display: block;"></video>
</div>

## Explore by Category

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
  <a href="/core/shell" style="text-decoration: none; color: inherit;">
    <div style="padding: 24px; background: var(--vp-c-bg-soft); border-radius: 12px; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-size: 32px; margin-bottom: 12px; font-family: monospace;">~/</div>
      <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px;">Core</div>
      <div style="font-size: 14px; opacity: 0.7; line-height: 1.4;">The heart of the system. Shell, CLI, and main configurations.</div>
    </div>
  </a>

  <a href="/desktop/qt" style="text-decoration: none; color: inherit;">
    <div style="padding: 24px; background: var(--vp-c-bg-soft); border-radius: 12px; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-size: 32px; margin-bottom: 12px; font-family: monospace;">./</div>
      <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px;">Desktop</div>
      <div style="font-size: 14px; opacity: 0.7; line-height: 1.4;">Window management and UI toolkit theming (QT/GTK).</div>
    </div>
  </a>

  <a href="/terminal/fish" style="text-decoration: none; color: inherit;">
    <div style="padding: 24px; background: var(--vp-c-bg-soft); border-radius: 12px; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-size: 32px; margin-bottom: 12px; font-family: monospace;">$_</div>
      <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px;">Terminal</div>
      <div style="font-size: 14px; opacity: 0.7; line-height: 1.4;">Shells, prompts, and CLI tool configurations.</div>
    </div>
  </a>

  <a href="/apps/firefox" style="text-decoration: none; color: inherit;">
    <div style="padding: 24px; background: var(--vp-c-bg-soft); border-radius: 12px; height: 100%; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-size: 32px; margin-bottom: 12px; font-family: monospace;">*</div>
      <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px;">Apps</div>
      <div style="font-size: 14px; opacity: 0.7; line-height: 1.4;">Themed applications like Firefox, Discord, and VSCode.</div>
    </div>
  </a>
</div>

## Quick Start

Ready to dive in? Clone the core repository and run the installer.

```bash
git clone https://github.com/caelestia-dots/caelestia.git ~/.local/share/caelestia
cd ~/.local/share/caelestia
./install.fish
```
