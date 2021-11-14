import os
from sys import argv
import subprocess

DOC_FOLDER = 'python-client/sphinx-docs'
PROJECT = 'autobahn-api'
AUTHOR = 'bundesAPI'
VERSION = '0.0.1'
LANGUAGE = 'de'

if __name__ == "__main__":
    (_,package_name,version,language) = argv
    PROJECT = f"{package_name}-api"
    VERSION = version
    LANGUAGE = language

    if not os.path.exists(DOC_FOLDER):
        os.mkdir(DOC_FOLDER)
    
    os.chdir(DOC_FOLDER)

    # use sphinx-quickstart to create the initial setup
    subprocess.run(['sphinx-quickstart', '--project='+PROJECT, '--author='+AUTHOR, '-v', VERSION, '--language='+LANGUAGE, '--extensions=m2r2,sphinx.ext.autodoc,sphinx.ext.napoleon,sphinx.ext.autosummary', '-q'])


    # add imports and path-edition to top of conf.py and append source_extensions
    path_edit = 'import os\nimport sys\nsys.path.insert(0, os.path.abspath("../"))'
    source_extensions = 'source_extensions = [".rst", ".md"]'
    with open('conf.py', 'r+') as conf:
        original_contents = conf.read()
        conf.seek(0,0)
        conf.write(path_edit + '\n'+original_contents + '\n' + source_extensions)
        
    
    ## edit index.rst

    # simple index_rst using globs
    index_rst_contents = PROJECT + ' Documentation\n'+ '='*(len(PROJECT + ' Documentation')) + '\n\n' + \
        '.. toctree::\n' + \
        '   :glob:\n\n' + \
        '   source/*\n'

    with open('index.rst', 'w') as index:
        index.write(index_rst_contents)


    # invoke sphinx-apidoc to generate all sources
    subprocess.run(['sphinx-apidoc','-o', 'source/', '../deutschland'])

    # finally build documentation
    subprocess.run(['make', 'html'])
