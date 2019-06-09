FROM adoptopenjdk/openjdk11
COPY ./ponton/target/Blog-0.0.1-SNAPSHOT.jar be.jar
CMD java -Dserver.port=8080 -Xms256m -Xmx256m -Xss512k -jar be.jar
EXPOSE 8080