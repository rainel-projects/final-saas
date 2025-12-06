const { Nexus } = require('./dist/src/core/src/index.js');

async function main() {
    console.log("--- Starting Nexus Protocol Demo ---");
    const node = new Nexus();
    await node.init();
    await node.connect();
    console.log("--- Demo Complete ---");
}

main().catch(console.error);
