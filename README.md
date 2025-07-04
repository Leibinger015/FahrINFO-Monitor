Mein FahrINFO-Monitor Projekt!

Zum Projekt: https://anb030.de/a/fahrinfo-monitor-skript/

Demo: https://anb030.de/app.fahrinfo/

![Icon](https://github.com/user-attachments/assets/6605b1b8-904f-4909-92db-a3a9210acea0)

In diesem Blogartikel stelle ich euch zwei Skripte vor, die mir seither das Leben erleichtern und die ihr – vorausgesetzt, ihr habt Programmierkenntnisse – ebenfalls nutzen könnt. Aber ich beginne erst einmal von vorne. Auf meinem täglichen Arbeitsweg stand ich immer wieder vor derselben Herausforderung: Diverse Umstiege mit teils mehreren Haltestellen pro Haltepunkt und verschiedenen Linien, aber keine zentrale, für mich persönlich übersichtliche Darstellung der für mich relevanten Abfahrten. Ihr habt diese Displays alle schon einmal gesehen: die digitale Abfahrtsanzeige an einer Haltestelle (Bus XYZ nach Musterstadt in 8 Min) und genau hier setzt meine FahrINFO WebApp (Demo-Seite) an: Diess ruft die Daten wie die digitalen Abfahrtsanzeigen von einer API ab und stellt diese mit allen relevanten Daten dar. Die offiziellen ÖPNV-Apps wie bspw. die der S-Bahn-Berlin (iOS, Android) liefern zwar die Daten, ist aber für die reine Darstellung der Abfahrten teils zu umständlich oder nach dem Redesign der BVG-App (iOS, Android) sogar teils unbrauchbar, da hier aktuell keine Abfahrtsdarstellung für eine favorisierte Haltestelle möglich ist. Aus diesem Grund hatte ich damit begonnen, ein eigenes Skript für eine WebApp zu entwickeln. Über ein Jahr hinweg ist daraus ein schlanker, flexibler FahrINFO-Monitor entstanden, der im Browser läuft und sich sogar mit einem Icon wie eine App auf dem Smartphone ablegen lässt. Das Skript aktualisiert sich automatisch alle 30 Sekunden und zeigt genau das an, was ich brauche: die nächsten Abfahrten meiner favorisierten Umsteigepunkte und Linien – schnell, klar und zuverlässig.

![IMG_3449](https://github.com/user-attachments/assets/bbdadb9b-d3a9-4122-997b-d82a988fef38)
