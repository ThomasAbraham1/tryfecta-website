import subprocess
import json

p = subprocess.Popen('npx hostinger-api-mcp', shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

req = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
}

p.stdin.write(json.dumps(req) + "\n")
p.stdin.flush()

for line in p.stdout:
    if "result" in line:
        try:
            data = json.loads(line)
            for tool in data.get("result", {}).get("tools", []):
                if tool["name"] == "hosting_deployStaticWebsite":
                    print(json.dumps(tool, indent=2))
            break
        except:
            pass
p.kill()
