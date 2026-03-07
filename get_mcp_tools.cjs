const { spawn } = require('child_process');

const mcpProcess = spawn('npx', ['hostinger-api-mcp'], {
    shell: true,
    stdio: ['pipe', 'pipe', 'inherit']
});

let output = '';

mcpProcess.stdout.on('data', (data) => {
    output += data.toString();
    if (output.includes('result')) {
        try {
            const parsed = JSON.parse(output.trim().split('\n').pop());
            const tool = parsed.result.tools.find(t => t.name === 'hosting_deployStaticWebsite');
            console.log(JSON.stringify(tool, null, 2));
            mcpProcess.kill();
        } catch (e) {
            // waiting for more data
        }
    }
});

const request = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/list"
};

mcpProcess.stdin.write(JSON.stringify(request) + '\n');
