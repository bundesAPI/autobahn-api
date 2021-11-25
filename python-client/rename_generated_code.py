import distutils.dir_util
import glob
import os
from sys import argv

PACKAGE_NAME = "autobahn"

if __name__ == "__main__":

    api = {"name": PACKAGE_NAME}
    generation_base_path = "./"
    generation_module_path = os.path.join(generation_base_path, api["name"])

    destination_path = os.path.join(".python-client/deutschland/", api["name"])

    # Go through generated package and make imports relative to deutschland package in all files ending with .py and .md
    file_types_for_substitution = [".py", ".md"]
    for file_type in file_types_for_substitution:
        print(
            f"Execute substitution os paths in {generation_base_path} by globbing {generation_base_path+f'/**/*{file_type}'} recursively."
        )
        for filepath in glob.iglob(
            generation_base_path + f"/**/*{file_type}", recursive=True
        ):
            print(filepath)
            with open(filepath) as file:
                s = file.read()
            s = s.replace(f'from {api["name"]}', f'from deutschland.{api["name"]}')
            s = s.replace(
                f'import {api["name"]}',
                f'from deutschland import {api["name"]}',
            )
            with open(filepath, "w") as file:
                file.write(s)
