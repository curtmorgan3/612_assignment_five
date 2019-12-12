FROM node:7
RUN mkdir /612_assignment_five
ADD . /612_assignment_five
WORKDIR /612_assignment_five
RUN npm i
EXPOSE 8080
CMD ["npm", "start"]