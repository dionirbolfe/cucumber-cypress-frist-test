
FROM cypress/included:10.10.0
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  apt-utils \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  # clean up
  && rm -rf /var/lib/apt/lists/*


# a few environment variables to make NPM installs easier
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true

RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .

COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN chmod -R 777 /cypress-docker
RUN npm install

RUN chmod -R 777 /root/.cache/Cypress
RUN chmod 777 /root
#RUN chmod 775 /root/.cache
RUN chmod 777 /root/.config
RUN chmod -R 777 /root/.config/Cypress

ENTRYPOINT ["npm", "run"]
