# Fasto reliability update — public preview

This preview contains the desktop and native-host binaries from the verified September 20 build. Existing executable/installer version fields remain 1.0.0; the release tag distinguishes this updated build.

## Fixes
- Safer segmented HTTP downloads, resume checks, partial-file recovery and cancellation.
- Improved media process controls, queue handling, restart persistence and output filename protection.
- Windows requests reuse the running Fasto window.
- Updated native messaging host and browser integration installer.

## Downloads
- **Fasto-Setup-v1.0.0.exe**: Windows x64 installer.
- **Fasto-Windows-x86_64.zip**: extract the whole portable folder, then run fasto.exe.
- **Fasto-Linux-amd64.deb**: Ubuntu 24.04 x64; install with `sudo apt install ./Fasto-Linux-amd64.deb`.
- **Fasto-Linux-x86_64.tar.gz**: portable Linux folder; extract and run ./fasto.
- **Fasto-Browser-Integration-Setup-v1.0.0.exe**: install Fasto first, then select supported browsers.

The Linux preview currently uses the package/launcher name **Fasto Private Test**. It is downloadable publicly here. It shares existing Fasto application data; close other instances and back up history before installing. FFmpeg/ffprobe are external dependencies for media merging/probing.

24 automated regression tests, Windows/Linux builds and Linux startup checks passed. Interactive browser installation, Windows handoff and every media site have not been exhaustively tested.

The browser integration installer uses supported extension-store channels. Publishing this release does **not** update the Edge Store extension; it may serve an earlier extension version. Unpacked extension ZIPs are not distributed in this public release.

Download SHA256SUMS.txt to verify the five packages. This is a preview; the previous stable release remains available.
