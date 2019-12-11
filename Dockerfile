FROM node:7
RUN mkdir /assignment_five
ADD . /assignment_five
WORKDIR /assignment_five
RUN npm i
EXPOSE 8080
CMD ["npm", "start"]