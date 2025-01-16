# Basis-Image
FROM alpine:3.17

# Autor
LABEL maintainer="Tobias Denzler <tobias.denzler@evonate.ch>"

# Shell-Skript ausführbar machen
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Standardkommando
ENTRYPOINT ["/entrypoint.sh"]
