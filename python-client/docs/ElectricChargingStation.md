# ElectricChargingStation


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extent** | [**Extent**](Extent.md) |  | [optional] 
**identifier** | **str** |  | [optional] 
**route_recommendation** | **[{str: (bool, date, datetime, dict, float, int, list, str, none_type)}]** |  | [optional] 
**coordinate** | [**Coordinate**](Coordinate.md) |  | [optional] 
**footer** | [**MultilineText**](MultilineText.md) |  | [optional] 
**icon** | **str** | Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet: &lt;ul&gt; &lt;li&gt;101: Gefahr&lt;/li&gt; &lt;li&gt;123: Bauarbeiten&lt;/li&gt; &lt;li&gt;250: Sperrung&lt;/li&gt; &lt;li&gt;262-2: Max. 3,5t&lt;/li&gt; &lt;li&gt;314-50: Park-/Rastplatz (Pkw/Lkw)&lt;/li&gt; &lt;li&gt;314-50-2: Park-/Rastplatz (nur Pkw)&lt;/li&gt; &lt;li&gt;448: Anschlussstelle gesperrt&lt;/li&gt; &lt;li&gt;charging_plug_strong: Schnellladestation für E-Fahrzeuge&lt;/li&gt; &lt;li&gt;warnkegel: Kurzzeitbaustelle&lt;/li&gt; &lt;/ul&gt;  | [optional] 
**is_blocked** | **str** |  | [optional] 
**description** | [**MultilineText**](MultilineText.md) |  | [optional] 
**title** | **str** |  | [optional] 
**point** | [**Point**](Point.md) |  | [optional] 
**display_type** | [**DisplayType**](DisplayType.md) |  | [optional] 
**lorry_parking_feature_icons** | [**[LorryParkingFeatureIcon]**](LorryParkingFeatureIcon.md) |  | [optional] 
**future** | **bool** |  | [optional] 
**subtitle** | **str** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


