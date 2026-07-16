# Initialization instructions

From the root of this repository you can execute:

```shell
PENPOT_VERSION=2.16 docker compose -p penpot -f ./penpot/docker-compose.yaml up -d
```

To add a user:

```shell
docker exec -ti penpot-penpot-backend-1 python3 manage.py create-profile
```

To stop penpot:

```shell
docker compose -p penpot -f ./penpot/docker-compose.yaml down
```

Further instructions [found here](https://help.penpot.app/technical-guide/getting-started/docker/)
Configure details [found here](https://help.penpot.app/technical-guide/configuration/)
