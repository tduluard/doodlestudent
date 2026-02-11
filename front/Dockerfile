# étape de build angular
FROM node:18-alpine AS build

WORKDIR /app

# installation des dependences 
COPY package*.json ./
RUN npm ci

# copie de l'intégralité du code source
COPY . .

# compilation de l'application Angular pour la production
RUN sed -i '/"extractCss":/d' angular.json
RUN npm run build -- --configuration production

# étape de creation du serveur
FROM nginx:alpine

# nettoyage du répertoire de Nginx
RUN rm -rf /usr/share/nginx/html/*

# récupération des fichiers compilés depuis l'étape de build angular
COPY --from=build /app/dist/*/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

# écoute sur le port exposée par l'application 
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
