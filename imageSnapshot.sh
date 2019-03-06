#!/usr/bin/env bash
set -e

docker-compose run build bash -c "npm run ci-only-image-snapshots -- $@"
