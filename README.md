# Hello World

Das ist eine einfache Hello World Applikation mit SpringBoot.

## Build

Das Backend kannst du wie folgt bauen:

```
mvn clean install
```

## Run

Um das Backend zu Starten, verwende folgenden Befehl:

```
mvn spring-boot:run
```

Optional kannst du auch noch die Umgebungsvariable *APP_GREETER* setzen.

Um das Backend zu prüfen, kannst du folgenden Endpunkt aufrufen:

```
curl http://localhost:8080/hello
```

## Test

Um die Cypress Tests zu starten, musst erst das Backend laufen. Danach kannst du Cypress wie folgt verwenden:

```
npm install cypress --save-dev
npx cypress run
```
