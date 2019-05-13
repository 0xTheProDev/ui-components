build_docker_image:
	docker-compose build build

run_image_snapshots:
	docker-compose run build bash -c "npm run ci-only-image-snapshots"

update_image_snapshot:
	docker-compose run build bash -c "npm run ci-only-image-snapshots -- -u"
