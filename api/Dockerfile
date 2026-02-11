# étape de compilation et de build 
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

# copie du fichier de configuration et du dossier source
COPY pom.xml .
COPY src ./src

# On compile l'application sans les tests.
RUN mvn package -DskipTests


# étape de mise a disposition du backend
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# On récupère uniquement les fichiers compilés depuis l'étape précédente
COPY --from=build /app/target/quarkus-app/lib/ /app/lib/
COPY --from=build /app/target/quarkus-app/*.jar /app/
COPY --from=build /app/target/quarkus-app/app/ /app/app/
COPY --from=build /app/target/quarkus-app/quarkus/ /app/quarkus/

# port exposé par l'application
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/quarkus-run.jar"]