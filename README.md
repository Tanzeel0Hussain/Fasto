# Fasto Download Manager

<p align="center">
  <img src="assets/fasto_icon.png" alt="Fasto icon" width="120">
</p>

<p align="center">
  <strong>Fast downloads. Less waiting.</strong>
</p>

<p align="center">
  A fast, lightweight desktop download manager for Linux and Windows with multi-connection transfers, resume support, media handling, and browser integration.
</p>

<p align="center">
  <a href="https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.0">Latest Release</a>
  ·
  <a href="https://tanzeel0hussain.github.io/Fasto/">Website</a>
</p>

## Fasto v1.0.0

Fasto v1.0.0 is available for **Linux x86_64** and **Windows x86_64**.

## Download

### Windows

Recommended installer:

- [Fasto-Setup-v1.0.0.exe](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Setup-v1.0.0.exe)
- [Installer SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Setup-v1.0.0.exe.sha256)

Portable package:

- [Fasto-Windows-x86_64.zip](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Windows-x86_64.zip)
- [Portable ZIP SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Windows-x86_64.zip.sha256)

### Linux

- [Fasto-Linux-x86_64.tar.gz](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Linux-x86_64.tar.gz)
- [Linux SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Linux-x86_64.tar.gz.sha256)

## Features

- ⚡ Multi-connection HTTP/HTTPS download engine
- ⏯️ Pause and resume support
- 🔄 Recovery for interrupted transfers
- 📦 Queue and download management
- 🎬 HLS and DASH media handling
- 🌐 Browser integration architecture
- 🧩 Bundled yt-dlp media resolver
- 🖥️ Native desktop builds for Linux and Windows
- 💾 Persistent download/history data
- 🛡️ Release privacy checks for known private source-path/token markers

## Windows installation

1. Download `Fasto-Setup-v1.0.0.exe`.
2. Run the installer.
3. Follow the setup wizard.
4. Launch Fasto from the Start menu or desktop shortcut if selected.

The Windows installer is built as a per-user installation and does not require administrator privileges by default.

For portable use, download and extract:

```text
Fasto-Windows-x86_64.zip
```

## Linux installation

### 1. Download

Download the Linux archive and checksum from the [Fasto v1.0.0 release](https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.0).

### 2. Verify

```bash
sha256sum -c Fasto-Linux-x86_64.tar.gz.sha256
```

Expected result:

```text
Fasto-Linux-x86_64.tar.gz: OK
```

### 3. Extract

```bash
tar -xzf Fasto-Linux-x86_64.tar.gz
cd Fasto-Linux-x86_64
```

### 4. Install

```bash
./install.sh
```

### 5. Launch

```bash
fasto
```

## Media requirements

Fasto bundles yt-dlp.

For full media merge/remux/probe functionality, FFmpeg and ffprobe should be available.

### Linux

- Linux x86_64
- Python 3.10+
- FFmpeg / ffprobe
- xdg-utils

Ubuntu/Debian:

```bash
sudo apt install python3 ffmpeg xdg-utils
```

### Windows

- Windows x86_64
- FFmpeg / ffprobe on PATH for full media functionality

## Browser extension

Fasto Browser Extension v1.0.0 is available as a single Chromium extension package for **Windows and Linux**:

- [Fasto-Browser-Extension-v1.0.0.zip](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Browser-Extension-v1.0.0.zip)
- [Extension SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Browser-Extension-v1.0.0.zip.sha256)

The GitHub ZIP is intended for manual/developer installation and browser-store submission. Direct one-click installation requires publication through Chrome Web Store / Edge Add-ons or another supported browser store.

Fasto's native messaging bridge must also be registered on the operating system for browser-to-desktop handoff.

## Platform support

| Platform | Status |
|---|---|
| Linux x86_64 | ✅ Available |
| Windows x86_64 | ✅ Available |
| macOS | ⏳ Planned |

Linux v1.0.0 has been tested on Ubuntu Linux. Windows v1.0.0 is built and validated using a Windows x86_64 GitHub Actions runner; broader hardware/Windows-version testing will continue.

## Release contents

The public release contains compiled Fasto binaries/installers, checksums, runtime files, bundled yt-dlp, and required license notices.

The private Fasto application/core source code is not published in this public repository.

## Security & privacy

Release workflows include checks designed to detect:

- known private repository/path markers
- local development username/path markers
- known GitHub token patterns
- private key markers

The Linux package also completed clean extraction, dependency, installer, and checksum verification before publication.

## Website

**https://tanzeel0hussain.github.io/Fasto/**

## Releases

**https://github.com/Tanzeel0Hussain/Fasto/releases**

## License

Fasto is distributed under the included **Fasto Download Manager Proprietary License**.

Third-party components remain subject to their own licenses and notices included with release packages.

---

<p align="center">
  <strong>Fasto — Download faster on Linux and Windows.</strong>
</p>
