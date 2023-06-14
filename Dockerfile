FROM ubuntu:latest
LABEL authors="viacheslav"
EXPOSE 808066
ENTRYPOINT ["top", "-b"]