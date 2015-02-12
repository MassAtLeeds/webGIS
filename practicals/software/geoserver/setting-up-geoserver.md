---
layout: default
title: Setting up Geoserver
---

## Introduction

GeoServer is the premier open source solution to serving maps on the internet, in terms of development,
features and number of high-profile users. In the intense open source online community,
GeoServer has been *outcompeting* MapServer since around 2011, when the term
"GeoServer" suppassed the term "MapServer" in [Google search terms](http://www.google.co.uk/trends/explore#q=mapserver%2C%20GeoServer&cmpt=q&tz=). We use GeoServer because it is
clearly the better and more 'up-and-coming' product.

![geoserver-vs-mapserver-img](http://snag.gy/vNBSj.jpg)

GeoServer is written in Java so it can be deployed on any system, supports modern low-level programming
design concepts and can access libraries into a range of other computational systems,
notably databases.

# GeoServer on your OSGEO Live installation 

One of the great things about OSGEO Live is that it comes with its own
pre-configured *localhost* so you can test serving information within
the safe bounds of a virtual computer, without having to go anywhere near the internet.
This is good to play around and avoids any security issues associated with
serving data publicly.

## Task: start-up GeoServer in OSGEO Live

*The below image may help.*

![geoserver-osgeo](http://snag.gy/hp9A2.jpg)

*When you are in, try logging in (you may need to look around OSGEO Live to find out how) - you should see something resembling the image below.*

![login-osgelive](http://snag.gy/xlJfl.jpg)

Take a look around your own personal GeoServer instance.
Check out the online examples and the [OSGEO Live Geoserver 'quickstart'](http://live.osgeo.org/en/quickstart/geoserver_quickstart.html).

# Testing an online GeoServer instance

To test GeoServer and demonstrate that it is possible for non-specialists
to set-up live, publicly facing web mapping systems based on free software,
we set-up a server hosted by the Sheffield-based digital technology
coorperative company [webarch.net](https://www.webarch.net/).
Then, with some assistance from a professional system adminsitrator,
we followed the GeoServer [installation guide]()
to deploy our very own instance to the cloud.

## Task: log-in and take a look around GeoServer

*Knowing that our server is called `geo8.webarch.net`, find the GeoServer
instance online. Log-in using a password supplied by the course instructors.
Take a look around. See what you can do.*


WMS (the Web Mapping Service) is a standard defined by the
[Open Geospatial Consortium](http://www.opengeospatial.org/) (OGC).
We use WMS as it is probably the most well-established standard for web mapping
and is very well supported by GeoServer, as can be seen [here](http://www.opengeospatial.org/).
There is a long specification document ([pdf](http://portal.opengeospatial.org/files/?artifact_id=14416))
from the [OGC's website](http://www.opengeospatial.org/standards/wms#downloads)
which states precisely how WMS works. There are a number of WMS-compliant map servers.

There are many free WMS-compliant servers publishing free web maps worldwide.
Amazingly, anyone with the know-how can hook-in to these for free. Some
maps being served through the WMS standard are described [here](http://trac.osgeo.org/openlayers/wiki/AvailableWMSServices). 
Note the list of organisations pushing WMS-compliant maps includes 
NASA and other globally respected knowledge-based organisations.

Let's see a practical example of what WMS actually means by querying a WMS service's
*capabilities*.

WMS defines "http requests" and what the response should be. One of the
foundational requests of a WMS-compliant map server is `GetCapabilities`.
According to the WMS standard, the `GetCapabilities` request should be
sent in a specific format, such as that illustrated below
(see [here](http://docs.geoserver.org/stable/en/user/services/wms/reference.html) for source):

```
http://localhost:8080/geoserver/wms?
service=wms&
version=1.1.1&
request=GetCapabilities
```

## Task: understanding `GetCapabilities`

*Based on the above request, try to ask our 'geo8.webarch.net' GeoServer[.](geo8.webarch.net:8080/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities)
what it's capabilities are. What is the server's response? What format is it in and why?
Try looking up `GetCapabilities` in the formal
[WMS standards document](http://portal.opengeospatial.org/files/?artifact_id=14416).*

## Serving maps to the world

The final task is more exploratory. Find out how to serve maps to the world from
GeoServer, such as the one illustrated below, which is partly (*task: find out which part*)
served from our
very own [GeoServer instance in Sheffield](http://massatleeds.github.io/webGIS/info/code/webmap1.html)!

[![](http://storage1.static.itmages.com/i/15/0212/h_1423699667_3651712_e35714952e.png)](http://massatleeds.github.io/webGIS/info/code/webmap1.html).

## Task: connecting GeoServer to OpenLayers or Leaflet

*Based on the above example (look at the source code using `Ctrl-U`) create a html file that serves a GeoServer map using your JavaScript web mapping library of choice. Extend this to contain multiple files.*


