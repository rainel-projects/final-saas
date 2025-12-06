/**
 * Nexus Protocol Core SDK
 *
 * This is the entry point for the decentralized infrastructure.
 * It handles:
 * 1. Identity (DID)
 * 2. P2P Networking (Libp2p)
 * 3. Data Sync (Yjs/CRDT)
 */
export declare class Nexus {
    constructor();
    /**
     * Initialize a new node identity
     */
    init(): Promise<void>;
    /**
     * Connect to the swarm
     */
    connect(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map