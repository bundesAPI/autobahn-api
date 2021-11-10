import os
import sys
import subprocess

DOC_FOLDER = 'python-client/sphinx-docs'
PROJECT = 'autobahn-api'
AUTHOR = 'bundesAPI'
VERSION = '0.0.1'
LANGUAGE = 'de'

if __name__ == "__main__":
    if not os.path.exists(DOC_FOLDER):
        os.mkdir(DOC_FOLDER)
    
    os.chdir(DOC_FOLDER)

    # install external extension m2r2, maybe remove from script and use requirements.txt
    # currently m2r2 is not required because no markdown files are included, if removed also remove extension m2r2!
    subprocess.check_call([sys.executable, "-m", "pip", "install", 'm2r2']) 

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
