#基础镜像
FROM node:alpine as builder

WORKDIR /application
ADD . /application
RUN npm install && npm run build

#多阶段构建
FROM nginx:alpine
COPY --from=builder /application/dist/ /usr/share/nginx/html/