# Autobahn App API
Das BMVI hat eine völlig nutzlose App gebaut. Eine Autobahn-Info App. 

Siehe: https://autobahn.api.bund.dev/

## Wirklich völlig nutzlos?
Nein, es gibt jetzt nämlich eine offene API für aktuelle Verwaltungsdaten in Bezug auf Baustellen-Informationen, Webcams, Parkplätze, … - bestimmt für jemand nützlich.

## Endpunkte
Hier gibt es eine OpenAPI Spec von [@creckord](https://github.com/creckord): https://gist.github.com/creckord/a2e09267f5fdfadc2cd75eedb3182b8a

- https://verkehr.autobahn.de/o/autobahn/ 
Gibt eine Liste der verfügbaren Autobahnen zurück.

- Abfrage von Daten zu einer einzelnen Autobahn (z.B. A1)
    - Baustellen https://verkehr.autobahn.de/o/autobahn/A1/services/roadworks (Details: https://verkehr.autobahn.de/o/autobahn/details/roadworks/[ID])
    - Webcams: https://verkehr.autobahn.de/o/autobahn/A1/services/webcam (Detail: https://verkehr.autobahn.de/o/autobahn/details/webcam/[ID])
    - Parkplätze: https://verkehr.autobahn.de/o/autobahn/A1/services/parking_lorry (Details: https://verkehr.autobahn.de/o/autobahn/details/parking_lorry/[ID])
    - Verkehrsmeldungen: https://verkehr.autobahn.de/o/autobahn/A1/services/warning (Details: https://verkehr.autobahn.de/o/autobahn/details/warning/[ID])
    - Sperrungen: https://verkehr.autobahn.de/o/autobahn/A1/services/closure (Detail: https://verkehr.autobahn.de/o/autobahn/details/closure/[ID])
    - E-Ladestationen: https://verkehr.autobahn.de/o/autobahn/A1/services/electric_charging_station (Detail: https://verkehr.autobahn.de/o/autobahn/details/electric_charging_station/[ID])

## Tiles 
[@riccardoklinger](https://github.com/riccardoklinger) hat die OSM-Tile-Endpoints gefunden: 

Basiskarte: https://tiles.autobahn.de/osm_tiles/{z}/{x}/{y}.png
Labels only: https://tiles.autobahn.de/osm_tiles_foreground/{z}/{x}/{y}.png

WMS & WFS Endpunkte (Danke an [@tobwen](https://twitter.com/tobwen))

*WMS*
- https://verkehr.autobahn.de/geoserver/vipnrw/wms
- https://geotiles.autobahn.de/geowebcache/service/wms

*WFS*
- https://www.verkehr.nrw/geoserver/vipnrw/wms?service=WFS
- https://verkehr.autobahn.de/geoserver/vipnrw/wms?service=WFS

## Projekte

- [@spinscale](https://github.com/spinscale) - [Elastic/Kibana Dashboard](https://gist.github.com/spinscale/544e854d2e16941cfbafdd53f80eb4f1)
