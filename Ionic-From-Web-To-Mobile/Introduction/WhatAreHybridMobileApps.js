/*

Hybrid Mobile Apps: A native wrapper around a Single Page Web App that runs locally on the device.

Explained
---------

Mobile applications are built in the native language of the OS...
    - Android: Java
    - iOS: ObjectiveC/Swift

The problem: A mobile app developer must...
    - Learn 2-3 heavyweight languages
    - Learn many different methodologies and paradigms to make apps that are native to both.
    - Support both code bases

Epiphany! Each OS has a single view that acts as an embedded browser!

So then, it is possible for your native application to be just one view, and that view to be an embedded browser window.

Then you can use JS/CSS/HTML to use applications that sit inside that browser...BRILLIANT!


Then comes Apache Cordova...

What is Apache Cordova? The bridge between the Single Page Web App that runs inside that embedded browser and the low-level device functions.

These functions include...
    - GPS
    - Camera
    - Contacts

What does Apache Cordova do? It provides a common JS interface to those device specific functions.

*/