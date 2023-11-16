cmake_minimum_required(VERSION 3.26)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(SCHEMATIC_ENABLE_TESTING ON CACHE BOOL
  "Enable testing in schematic source")

project(schematic LANGUAGES CXX)

if (SCHEMATIC_ENABLE_TESTING)
#   add_subdirectory(third_party/googletest)
endif()

include(ExternalProject)

ExternalProject_Add(Hermes
  PREFIX "hermes"
  DOWNLOAD_DIR "${CMAKE_SOURCE_DIR}/deps/downloads"
  DOWNLOAD_NAME hermes.zip
  URL https://github.com/facebook/hermes/archive/c54d71f6ec58306e7c1bdb2efea56d261b7f9c76.zip
  URL_HASH SHA256=aa1012397826bb20841654da1b3db9736e01008b3ca4ef3874f388c849924163
  CMAKE_ARGS -DHERMES_ENABLE_TEST_SUITE:BOOLEAN=false)

add_subdirectory(packages/schematic-runtime)
add_dependencies(schematicruntime Hermes)
