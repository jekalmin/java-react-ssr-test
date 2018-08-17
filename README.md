# spring-react-ssr-test
## Objective
- Test Server Side Rendering(SSR) of React using Spring Boot
- Performance difference between nashorn and j2v8

## Build and Run
```sh
# run webpack
npm run build --prefix src/main/resources
```
```sh
# tomcat start
mvn spring-boot:run
```
Entry URL: 

http://localhost:8080/test


## Reference
- https://ebaytech.berlin/react-js-server-side-rendering-with-j2v8-b9ced07888fb
- https://patrickgrimard.io/2016/11/24/server-side-rendering-with-spring-boot-and-react/
- https://github.com/pgrimard/spring-j2v8
