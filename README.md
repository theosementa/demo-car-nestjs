### Setup

- Lancer le projet `docker compose up`

### Logs

- Pour voir les logs: `docker exec -it demo_nestjs_api_vehicle cat /var/log/nestjs/app.log`
- Pour suivre les logs en temps reel: `docker exec -it demo_nestjs_api_vehicle tail -f /var/log/nestjs/app.log`