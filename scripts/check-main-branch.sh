#!/bin/bash
echo "=== Files on main branch ==="
cd /vercel/share/v0-project
git show origin/main:package.json 2>&1 | head -20
echo ""
echo "=== All files on main branch ==="
git ls-tree origin/main --name-only
echo ""
echo "=== Current branch ==="
git branch
echo ""
echo "=== Local package.json first 5 lines ==="
head -5 package.json
