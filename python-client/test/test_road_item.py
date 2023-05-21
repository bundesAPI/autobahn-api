"""
    Autobahn App API

    Was passiert auf Deutschlands Bundesstraßen? API für aktuelle Verwaltungsdaten zu Baustellen, Staus und Ladestationen. Außerdem Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.   # noqa: E501

    The version of the OpenAPI document: 1.0.1
    Contact: kontakt@autobahn.de
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

from deutschland.autobahn.model.coordinate import Coordinate
from deutschland.autobahn.model.display_type import DisplayType
from deutschland.autobahn.model.extent import Extent
from deutschland.autobahn.model.lorry_parking_feature_icon import (
    LorryParkingFeatureIcon,
)
from deutschland.autobahn.model.multiline_text import MultilineText
from deutschland.autobahn.model.point import Point

from deutschland import autobahn

globals()["Coordinate"] = Coordinate
globals()["DisplayType"] = DisplayType
globals()["Extent"] = Extent
globals()["LorryParkingFeatureIcon"] = LorryParkingFeatureIcon
globals()["MultilineText"] = MultilineText
globals()["Point"] = Point
from deutschland.autobahn.model.road_item import RoadItem


class TestRoadItem(unittest.TestCase):
    """RoadItem unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testRoadItem(self):
        """Test RoadItem"""
        # FIXME: construct object with mandatory attributes with example values
        # model = RoadItem()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()
