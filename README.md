# TP-WIK-DPS-TP03
Pour lancer l'API il faut exécuter les commandes suivantes.

Le WebService permet de récupérer les Headers de la requête sur /ping donc une réponse.
Dans le cas où on tente une requête autre que /ping on obtiendra une erreur 404 qui nous indiquera que l'adresse n'est pas trouvable

Pour executer le webservice avec docker 
### lancer le docker compose
- docker compose up

### lancer le docker compose et build
- docker compose up --build

### stoper un docker compose
- docker compose down

### build le projet
- npx tsc

### afficher et visualiser le hostname dans l'API
- localhost:8080/ping


