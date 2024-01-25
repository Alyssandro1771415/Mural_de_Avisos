FROM node:18.13.0-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
