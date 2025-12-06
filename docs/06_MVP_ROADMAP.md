# 60-Day MVP Roadmap: The "Usable" Protocol

## Goal
A developer can build a full "Instagram Clone" or "Chat App" using ONLY Nexus, with no backend code.

## Month 2 Focus: Storage & Encryption
-   **Encrypted Blobs**: Client-side encryption (AES-GCM) for files.
-   **IPFS Bridge**: Connector to push encrypted blobs to IPFS/Pinata (user provides API key initially, or use public gateways).
-   **Auth UI**: A pre-built `<NexusAuth />` React component.
-   **Permissions**: Basic UCAN implementation ("User A can write to /posts/user-a/*").

## Key Features
1.  **Blob Storage**: `nexus.storage.upload(file)`.
2.  **Querying**: Basic indexing of local data (e.g., "Get all posts where author = me").
3.  **Presence**: See who is online in the swarm.

## Launch Prep
-   **Docs Site**: Docusaurus site with tutorials.
-   **Examples**: Todo List, Chat App, Photo Gallery.
-   **Release**: v1.0.0-beta on npm.
