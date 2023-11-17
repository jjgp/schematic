cmake_minimum_required(VERSION 3.26)
project(schematic LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(SCHEMATIC_ENABLE_TESTING ON CACHE BOOL
  "Enable testing in schematic source")


include(FetchContent)
if (SCHEMATIC_ENABLE_TESTING)
  FetchContent_Declare(
    googletest
    GIT_REPOSITORY git@github.com:google/googletest.git
    GIT_TAG v1.14.0
  )

  FetchContent_MakeAvailable(googletest)
endif()

add_subdirectory(third_party)
