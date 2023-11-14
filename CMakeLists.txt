cmake_minimum_required(VERSION 3.26)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

project(schematic LANGUAGES CXX)

add_subdirectory(third_party/hermes)
add_subdirectory(packages/schematic-runtime)
