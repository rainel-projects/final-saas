# Contribution & Repository Rules

## Philosophy
**Code > Meetings.** **Ship > Polish.** **Protocol > Platform.**

## Repository Structure
```
final-saas/
├── docs/               # Architecture, Plans, Roadmaps
├── src/
│   ├── core/           # The main SDK (@nexus/core)
│   ├── node/           # The CLI/Relay node implementation
│   ├── web/            # The Dashboard/Playground (Static Site)
│   └── contracts/      # Smart Contracts (if needed later)
├── examples/           # Demo apps built on Nexus
└── scripts/            # Automation scripts
```

## Contribution Workflow
1.  **Fork & Branch**: No direct pushes to `main`.
2.  **Atomic Commits**: One feature, one commit (or squashed PR).
3.  **Test Driven**: New features must include tests in `tests/`.
4.  **Docs First**: Update documentation before code.

## Automation Rules
-   **CI/CD**: GitHub Actions runs tests on every push.
-   **Release**: Semantic Release automatically publishes npm packages on merge to `main`.
-   **Formatting**: Prettier/ESLint enforced automatically.

## "Zero-Human" Policy
-   Support requests are handled by AI bot or community.
-   No manual code reviews for minor fixes (automated checks).
-   Feature requests are prioritized by on-chain voting or usage metrics (future).
