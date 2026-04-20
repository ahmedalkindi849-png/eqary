import { execSync } from 'child_process';

const cwd = '/vercel/share/v0-project';

console.log("=== package.json on main branch ===");
try {
  const mainPkg = execSync('git show origin/main:package.json', { cwd, encoding: 'utf-8' });
  console.log(mainPkg.substring(0, 500));
} catch (e) {
  console.log("Error:", e.message.substring(0, 200));
}

console.log("\n=== All files on main branch ===");
try {
  const files = execSync('git ls-tree origin/main --name-only', { cwd, encoding: 'utf-8' });
  console.log(files);
} catch (e) {
  console.log("Error:", e.message.substring(0, 200));
}

console.log("\n=== Current branch ===");
try {
  const branch = execSync('git branch', { cwd, encoding: 'utf-8' });
  console.log(branch);
} catch (e) {
  console.log("Error:", e.message.substring(0, 200));
}

console.log("\n=== package.json on deployment-fix branch ===");
try {
  const depPkg = execSync('git show origin/deployment-fix:package.json 2>&1', { cwd, encoding: 'utf-8' });
  console.log(depPkg.substring(0, 500));
} catch (e) {
  console.log("Branch not found or error:", e.message.substring(0, 200));
}
