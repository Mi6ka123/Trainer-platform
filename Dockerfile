FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Create initialization script
RUN echo '#!/bin/sh\n\
if [ -n "$DATABASE_URL" ]; then\n\
  echo "Initializing database..."\n\
  npx prisma migrate deploy || true\n\
  npm run init-db || true\n\
fi\n\
npm start' > /app/entrypoint.sh && \
chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
