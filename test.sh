#!/usr/bin/env bash

echo 'Running tests...'
git add .
( npm test && git commit -m working && echo 'commiting!' ) || ( git reset --hard && echo 'Doing a reset!' )