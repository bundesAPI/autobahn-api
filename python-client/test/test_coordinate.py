"""
    Autobahn App API

    Was passiert auf Deutschlands Bundesstraßen? API für aktuelle Verwaltungsdaten zu Baustellen, Staus und Ladestationen. Außerdem Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.   # noqa: E501

    The version of the OpenAPI document: 1.0.1
    Contact: kontakt@autobahn.de
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

from deutschland.autobahn.model.lat_long_value import LatLongValue

from deutschland import autobahn

globals()["LatLongValue"] = LatLongValue
from deutschland.autobahn.model.coordinate import Coordinate


class TestCoordinate(unittest.TestCase):
    """Coordinate unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testCoordinate(self):
        """Test Coordinate"""
        # FIXME: construct object with mandatory attributes with example values
        # model = Coordinate()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()
