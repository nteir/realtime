requirements:
	poetry export -f requirements.txt -o requirements.txt --without-hashes

rebuild:
	docker-compose up -d --build

.PHONY: requirements rebuild