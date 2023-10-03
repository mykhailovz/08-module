# swagger docs
```
open http://localhost:4000/api-docs
```


# swagger yaml file
open http://localhost:4000/swagger.yaml


# search movies
```
curl --location 'localhost:4000/movies?search=Stars&searchBy=title'
```

# update a movie
```
curl --location 'localhost:4000/movies' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Test_Test",
    "poster_path": "http://google.com",
    "overview": "Hello world",
    "runtime": 90
}'
```


# get a single movie
```
curl --location 'localhost:4000/movies/1694762382165'
```


# delete a movie
```
curl --location --request DELETE 'localhost:4000/movies/1694764490468'
```
