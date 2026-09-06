# Fasto Download Manager

<p align="center">
  <img src="assets/fasto_icon.png" alt="Fasto icon" width="120">
</p>

<p align="center">
  <strong>Fast downloads. Less waiting.</strong>
</p>

<p align="center">
  A fast, lightweight Linux download manager with multi-connection transfers, resume support, media handling, and browser integration.
</p>

<p align="center">
  <a href="https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.0">Latest Release</a>
  ·
  <a href="https://tanzeel0hussain.github.io/Fasto/">Website</a>
</p>

## Fasto v1.0.0

The first public Fasto release is available for **Linux x86_64**.

### Download

- [Fasto-Linux-x86_64.tar.gz](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Linux-x86_64.tar.gz)
- [SHA256 checksum](https://github.com/Tanzeel0Hussain/Fasto/releases/download/v1.0.0/Fasto-Linux-x86_64.tar.gz.sha256)

## Features

- ⚡ Multi-connection HTTP/HTTPS download engine
- ⏯️ Pause and resume support
- 🔄 Recovery for interrupted transfers
- 📦 Queue and download management
- 🎬 HLS and DASH media handling
- 🌐 Native browser messaging integration
- 🧩 Bundled yt-dlp media resolver
- 🖥️ Modern Linux desktop interface
- 💾 Persistent download/history data
- 🛡️ Release package audited for private source-path and secret leakage

## Installation

### 1. Download the release

Download both the archive and checksum from the [Fasto v1.0.0 release](https://github.com/Tanzeel0Hussain/Fasto/releases/tag/v1.0.0).

### 2. Verify the archive

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

Fasto is installed for the current user under:

```text
~/.local/opt/fasto
```

## Requirements

For full media functionality:

- Linux x86_64
- Python 3.10+
- FFmpeg
- ffprobe
- xdg-utils

Ubuntu/Debian:

```bash
sudo apt install python3 ffmpeg xdg-utils
```

## Browser integration

The Linux package includes Fasto's native messaging host.

The browser extension itself is distributed separately and is **not included** in the v1.0.0 Linux archive.

## Platform support

| Platform | Status |
|---|---|
| Linux x86_64 | ✅ Available |
| Windows | ⏳ Planned |
| macOS | ⏳ Planned |

The current release has been tested on Ubuntu Linux. Broader Linux distribution compatibility has not yet been fully verified.

## Release contents

The public Linux package includes compiled Fasto binaries, runtime libraries, installer files, bundled yt-dlp, and required license notices.

This public repository does **not** publish the private Fasto application/core source code.

## Security & privacy

The v1.0.0 Linux package was checked before publication for:

- raw Fasto source files
- private Git repository/build directories
- local development username paths
- known GitHub token patterns
- private key markers
- missing shared-library dependencies

The final packaged archive also passed a clean extraction and installer/runtime verification.

## Website

Visit the Fasto website:

**https://tanzeel0hussain.github.io/Fasto/**

## Releases

See all Fasto releases:

**https://github.com/Tanzeel0Hussain/Fasto/releases**

## License

Fasto is distributed under the included **Fasto Download Manager Proprietary License**.

Third-party components remain subject to their own licenses and notices included with the release package.

---

<p align="center">
  <strong>Fasto — Download faster on Linux.</strong>
</p>
