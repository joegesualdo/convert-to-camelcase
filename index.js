"use strict";

export default function convertToCamelcase(str) {
    return str.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });

}
