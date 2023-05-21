"""
    Autobahn App API

    Was passiert auf Deutschlands Bundesstraßen? API für aktuelle Verwaltungsdaten zu Baustellen, Staus und Ladestationen. Außerdem Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.   # noqa: E501

    The version of the OpenAPI document: 1.0.1
    Contact: kontakt@autobahn.de
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

from deutschland.autobahn.model.closure import Closure

from deutschland import autobahn

globals()["Closure"] = Closure
from deutschland.autobahn.model.closures import Closures


class TestClosures(unittest.TestCase):
    """Closures unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testClosures(self):
        """Test Closures"""
        # FIXME: construct object with mandatory attributes with example values
        # model = Closures()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()
