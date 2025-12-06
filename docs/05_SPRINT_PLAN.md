# 30-Day Sprint Plan: The Foundation

## Goal
Build the "Hello World" of P2P: Two browsers connecting, authenticating, and sharing a database document without a server.

## Weeks 1-2: Core Networking & Identity
-   [ ] **Repo Setup**: TypeScript monorepo (Turborepo/Nx).
-   [ ] **Identity Module**: Generate `did:key` in browser. Sign/Verify messages.
-   [ ] **Network Module**: Integrate `libp2p` + `webrtc-star` (or similar) for browser-to-browser connection.
-   [ ] **Discovery**: Implement a simple bootstrap signaling server (temporary, hosted on free tier Render/Glitch just for handshake).

## Weeks 3-4: Data & Storage MVP
-   [ ] **DB Module**: Integrate `Yjs` or `Automerge`.
-   [ ] **Sync Logic**: Sync a JSON document between two connected peers.
-   [ ] **Persistence**: Save state to `IndexedDB`.
-   [ ] **Demo App**: A simple "Shared Note" app using the SDK.

## Deliverables (Day 30)
1.  `@nexus/core` npm package (alpha).
2.  A working demo URL (GitHub Pages) where User A can type, and User B sees it.
3.  Documentation on "How to build a P2P app".
