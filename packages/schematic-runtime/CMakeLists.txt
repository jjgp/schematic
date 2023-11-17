add_subdirectory(src)

if(SCHEMATIC_ENABLE_TESTING)
    # add_subdirectory(test)
endif()

target_link_libraries(schematicruntime hermes::jsi)
# target_include_directories(schematicruntime PUBLIC
