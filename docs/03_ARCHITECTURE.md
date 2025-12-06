# Architecture & Technical Design

## High-Level Overview
Nexus Protocol is a **Local-First, Peer-to-Peer Application Platform**.
It eliminates the "Backend" as a centralized service. Instead, the "Backend" is a library running on the client, syncing data directly between users and incentivized storage/compute nodes.

## Core Components

### 1. The Client SDK (`@nexus/core`)
-   **Runtime**: Runs in Browser (JS/WASM), Mobile (Flutter/React Native), or Server (Node/Deno).
-   **Identity**: Manages DID (Decentralized Identifier) and keys.
-   **Data Layer**: A CRDT-based document store (like a distributed MongoDB).
-   **Network**: Libp2p / WebRTC for direct peer connections.

### 2. The Network (The "Swarm")
-   **User Nodes**: Every active client is a node. They store their own data and cache data for peers they interact with.
-   **Relay Nodes**: Purely optional, community-run nodes. The founder runs NONE. Users can run their own relays or use public goods relays (e.g., libp2p public relays) if available.
-   **Compute Nodes**: Nodes that execute "Cloud Functions" (WASM modules) for a fee paid directly by the requester.

### 3. Storage Layer
-   **Hot Data**: Stored locally in IndexedDB/SQLite. Synced via GossipSub to active peers using CRDTs (Conflict-free Replicated Data Types) for eventual consistency.
-   **Cold Data**: Encrypted snapshots anchored to IPFS/Arweave. **Persistence is paid by the user** (they provide their own pinning service API key or run a local IPFS node). The protocol provides the *interface*, not the *storage bucket*.

### 4. Identity & Auth
-   **DID Methods**: `did:key` (ephemeral, free), `did:pkh` (blockchain based, free read).
-   **Auth**: Challenge-response signatures. No passwords. No centralized auth server.
-   **Access Control**: UCANs (User Controlled Authorization Networks) for capability-based permissions.


## Data Flow Diagram (Conceptual)

```mermaid
graph TD
    UserA[User A (Browser)] <-->|WebRTC/Gossip| UserB[User B (Mobile)]
    UserA <-->|Encrypted Backup| StorageNode[IPFS Storage Node]
    UserB <-->|Encrypted Backup| StorageNode
    UserA -->|Task Request| ComputeNode[Compute Node (WASM)]
    ComputeNode -->|Result| UserA
```

## Technology Stack
-   **Language**: TypeScript (Core), Rust (Performance/WASM).
-   **Networking**: Libp2p, WebRTC.
-   **Database**: Yjs or Automerge (CRDTs) + SQLite (Local).
-   **Storage**: IPFS (Helia).
-   **Identity**: DID-JWT, UCAN.

## Deployment Model
-   **No Servers**: The "API" is just the SDK.
-   **Entry Point**: A static HTML file hosted on GitHub Pages / IPFS acts as the "Bootnode" list and documentation.
-   **Updates**: Signed code updates distributed via the protocol itself.
