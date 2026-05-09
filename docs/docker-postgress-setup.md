# PostgreSQL + pgAdmin Docker Setup

## 1. Create Network
docker network create turbomory-db-net

## 2. Create Volume
docker volume create turbomory-db-data

## 3. Run PostgreSQL
docker run -d \
--name turbomory-db \
--network turbomory-db-net \
-v turbomory-db-data:/var/lib/postgresql/data \
-e POSTGRES_USER=admin \
-e POSTGRES_PASSWORD=admin123 \
-e POSTGRES_DB=turbomory \
-p 5432:5432 \
postgres:16

## 4. Run pgAdmin
docker run -d \
--name turbomory-pgadmin \
--network turbomory-db-net \
-e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
-e PGADMIN_DEFAULT_PASSWORD=admin123 \
-p 8080:80 \
dpage/pgadmin4

## 5. Connect pgAdmin to PostgreSQL
Open http://localhost:8080
Login: admin@admin.com / password
Add Server:
- Host: turbomory-db
- Port: 5432
- Username: admin
- Password: admin123
