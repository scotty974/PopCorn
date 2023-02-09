# POPCORN

## Variables d'environnement

```
DATABASE_URL=donc le lien vers une base mysql (⚠️ pas nécessaire si lancé avec Docker)
API_PORT=port de l'API
CORS_ORIGIN=adresse autorisée pour les CORS
MYSQL_ROOT_PASSWORD=mot de passe du root MYSQL (⚠️ pas nécessaire si lancé sans Docker)
```

## Utilisation avec Docker

Penser à bien définir les variables d'environnement dans un .env à la racine du projet.

### Build & start

```
docker-compose up --build -d
```
