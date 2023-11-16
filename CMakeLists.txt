cmake_minimum_required(VERSION 3.26)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(SCHEMATIC_ENABLE_TESTING ON CACHE BOOL
  "Enable testing in schematic source")

project(schematic LANGUAGES CXX)

if (SCHEMATIC_ENABLE_TESTING)
  # add_subdirectory(third_party/googletest)
endif()

include(FetchContent)

# FetchContent_Declare(
#   googletest
#   URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
# )

FetchContent_Declare(
  Hermes
  GIT_REPOSITORY git@github.com:facebook/hermes.git
  GIT_TAG rn/0.73-stable
)

set(HERMES_ENABLE_TEST_SUITE OFF CACHE BOOL "")
FetchContent_MakeAvailable(Hermes)

add_subdirectory(packages/schematic-runtime)
