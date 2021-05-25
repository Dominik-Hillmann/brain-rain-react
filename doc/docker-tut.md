# A docker tutorial

## Download an image
`docker pull <name>` will download an image from the Docker hub. For example
```sh
docker pull ubuntu
```

## See downloaded images
```sh 
docker images
```

## Run a container
This command will run a container that uses a certain downloaded image. `docker run -d -t --name <container-name> <image-name>`. For example:
```sh
docker run -d -t --name my-container-name ubuntu
```
This will return an ID which you can then view with ...

## See running containers
You can view your running containers with `docker ps`.

## Connect to a container's command line
You can do so by typing `docker exec -it <container-name> bash`. For example:
```sh
docker exec -it my-container-name bash
```
You can exit the command line using `exit`.

## Run a Docker container with ports exposed
Map requests to port 80 of the host OS to port 80 of the container OS.
```sh
docker run -t -d -p 80:80 --name <container-name> mongo-express
```

## Stop a container
```sh
docker stop <container-name>
```

## And start a container again
```sh
docker start <container-name>
```

## See container statistics
```sh
docker stats
```
# Commands in the `Dockerfile`
* `RUN`: a command triggered when building the  Docker image, e.g. `RUN pip install -r requirements.txt`
* `CMD`: a command triggered when the container gets launched, e.g. `CMD ["python3", "app/app.py", "-n", "test"]`
* `FROM`: the base image on which this Dockerfile builds, e.g. `FROM ubuntu`

## Build an image from a `Dockerfile`
```sh
docker build -t <image-name>:<image-tag>  path/to/Dockerfile
```
e.g.
```sh
docker build -t my-image:1.0.0 .
```
Then, you can see the image using `docker images`.
Run it with `docker run <image-id>`