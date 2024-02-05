#!/usr/bin/env bash

echo 'Running tests...'
git add .
( npm test --run && git commit -m %1% && echo 'commiting!' ) || ( git reset --hard && echo 'Doing a reset!' )