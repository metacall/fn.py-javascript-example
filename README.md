# MetaCall Fn.py JavaScript Example

An example of using Fn.py (Python) from JavaScript (NodeJS) with [MetaCall](https://github.com/metacall/core).

## Install

```sh
# Install MetaCall CLI
curl -sL https://raw.githubusercontent.com/metacall/install/master/install.sh | sh

# Install the dependencies
metacall pip3 install -r requirements.txt
```

## Run it

```sh
metacall index.js
```

## Docker

```sh
docker build --build-arg CACHE_INVALIDATE=`date +%s` -t metacall/fnpy-javascript-example .
docker run --rm -it metacall/fnpy-javascript-example
```
