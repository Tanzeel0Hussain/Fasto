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
  <a href="https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.1-preview.1">Latest Preview Release</a>
  ·
  <a href="https://tanzeel0hussain.github.io/Fasto/">Website</a>
</p>

## Fasto v1.0.1-preview.1

The latest reliability update is available as a **public preview** for **Ubuntu 24.04 x86_64** and **Windows x86_64**. Installer filenames and embedded app version fields still say `1.0.0`; the release tag identifies the updated build.

Close existing Fasto instances and back up download history before testing. This preview uses the existing Fasto data directory.

## Download

### Windows

Recommended installer:

- [Fasto-Setup-v1.0.0.exe](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/Fasto-Setup-v1.0.0.exe)
- [Installer SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/SHA256SUMS.txt)

Portable package:

- [Fasto-Windows-x86_64.zip](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/Fasto-Windows-x86_64.zip)
- [Portable ZIP SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/SHA256SUMS.txt)

### Linux

- [Fasto-Linux-amd64.deb](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/Fasto-Linux-amd64.deb) — Ubuntu 24.04 x64 installer
- [Fasto-Linux-x86_64.tar.gz](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/Fasto-Linux-x86_64.tar.gz)
- [Linux SHA256](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/SHA256SUMS.txt)

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

### Ubuntu 24.04 x64 package

Download `Fasto-Linux-amd64.deb` from the [latest preview release](https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.1-preview.1), then run:

```bash
sudo apt install ./Fasto-Linux-amd64.deb
fasto-private-test
```

The current preview's launcher is named **Fasto Private Test**.

### Portable archive

Download `Fasto-Linux-x86_64.tar.gz` and `SHA256SUMS.txt` into the same folder. Verify the downloaded archive:

```bash
grep '  Fasto-Linux-x86_64.tar.gz$' SHA256SUMS.txt | sha256sum -c -
tar -xzf Fasto-Linux-x86_64.tar.gz
cd Fasto-Linux-x86_64
./fasto
```

Keep the complete extracted folder together. This archive does not contain an `install.sh` script.

For optional native browser integration, run `python3 register-browser-integration.py` from the portable folder in its permanent location. For the DEB installation, run `python3 /opt/fasto-private-test/register-browser-integration.py` as your normal desktop user, then restart the browser.

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

- [Windows Browser Integration installer](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.1-preview.1/Fasto-Browser-Integration-Setup-v1.0.0.exe)
- [Microsoft Edge Add-ons listing](https://microsoftedge.microsoft.com/addons/detail/bddofecekmcbaneoihhpnebiimcldjec)

Install Fasto first, then run the Windows integration installer and select the supported browsers. The browser controls the final extension installation approval. Linux users can register the native host using the instructions above.

The integration installer uses supported store channels. **This desktop release does not update the Edge Store extension**; its available version may differ from the private test extension. The manual extension ZIP remains private.

## Platform support

| Platform | Status |
|---|---|
| Linux x86_64 | ✅ Available |
| Windows x86_64 | ✅ Available |
| macOS | ⏳ Planned |

This preview passed 24 automated regression tests, Windows/Linux builds, Linux startup checks and package integrity verification. Interactive Windows/browser behavior and every media site have not been exhaustively tested.

## Release contents

The public release contains compiled Fasto binaries/installers, checksums, runtime files, bundled yt-dlp, and required license notices.

The private Fasto application/core source code is not published in this public repository.

## Security & privacy

Release workflows include checks designed to detect:

- known private repository/path markers
- local development username/path markers
- known GitHub token patterns
- private key markers

The published package hashes match the verified build. Full platform requirements and testing scope are included in the release notes.

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
