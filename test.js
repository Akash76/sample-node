var ExifImage = require('exif').ExifImage;

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    
    var dd = degrees + (minutes/60) + (seconds/3600);
    
    if (direction == "S" || direction == "W") {
        dd = dd * -1; 
    }
    
    return dd;
}

try {
    new ExifImage({ image : 'sample.jpg' }, function (error, exifData) {
        if (error)
            console.log(error);
        else
            var gps = exifData.gps
            var latitude = ConvertDMSToDD(gps.GPSLatitude[0], gps.GPSLatitude[1], gps.GPSLatitude[2], gps.GPSLatitudeRef)
            var longitude = ConvertDMSToDD(gps.GPSLongitude[0], gps.GPSLongitude[1], gps.GPSLongitude[2], gps.GPSLongitudeRef)

            console.log(gps)
            console.log(latitude, longitude)
    });
} catch (error) {
    console.log( error);
}