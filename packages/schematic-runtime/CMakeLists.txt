add_subdirectory(src)

if(SCHEMATIC_ENABLE_TESTING)
    # add_subdirectory(test)
endif()

target_link_libraries(schematicruntime libhermes)
# target_include_directories(schematicruntime PUBLIC
