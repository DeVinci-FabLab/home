FROM ubuntu:24.04

RUN apt update
RUN apt install git -y

ENV NODE_VERSION=20.10.0
RUN apt install -y curl iproute2
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}

COPY . /home/node/MyFab_Front/
WORKDIR /home/node/MyFab_Front/
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm install 
RUN npm run build 

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "run", "start"]