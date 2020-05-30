#!/bin/bash

docker run \
    -e "PORT=2323" \
    -p 2323:2323 \
    mock-avr:latest
