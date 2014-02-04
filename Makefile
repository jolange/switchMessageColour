
.PHONY: pack

pack:
	cd src && zip -r ../switchMessageColour.xpi * -x *.xcf
