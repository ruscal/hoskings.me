
export const shortDateTimeFormat = "ddd D MMM YYYY, HH:mm";
export const longDateTimeFormat = "MMMM Do YYYY, HH:mm";
export const serializedDateTimeFormat = "YYYY-MM-DDTHH:mm"; //2015-03-24T18:45:00
export const serializedDateFormat = "YYYY-MM-DDTH";

export const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export const toInnerHTMLObject = (content) => {
    return {__html: content};
}

export const isNullOrUndefined = (value) => {
    return typeof value === "undefined" || value === null;
}

export const isNullOrEmpty = (value) => {
    return isNullOrUndefined(value) || value === "";
}

export const hasValue = (value) => {
    return !isNullOrUndefined(value);
}

export const hasNonEmptyValue = (value) => {
    return !isNullOrEmpty(value);
}

export const distinctArray = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
};

export const newGuid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export const toAlphaNumeric = (text, replacement) => {
    if (text) {
        if(!replacement)
            replacement = "";
        text = text.replace(/[^a-zA-Z0-9]/g, replacement);
    }
    return text;
}


export const copy = (obj) => {
    return JSON.parse(JSON.stringify( obj ));
}


export const getEnumName = (enumObj, val) =>
{
    var keyNames = Object.keys(enumObj);
    for (var i in keyNames) {
        var key = keyNames[i];
        if (enumObj[key] === val)
            return key;
    }
    return null;
}

export const camelCase = (text) => {
    if(!text || typeof text !== "string")
        return text;

    return text[0].toLowerCase() + text.substring(1);
}

export const splitValueFromDimension = (val) => {
    if (!val)
        return { val: null, dim: null };

    let regEx = /^([0-9.]+)([a-zA-Z%]*)$/;
    let match = ("" + val).match(regEx);
    return { val: match[1], dim: match[2] };
};

export const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

export const hasCssClass = (source, cssClassName) =>{
    if(isNullOrUndefined(source) || isNullOrUndefined(cssClassName))
        return false;
    cssClassName = cssClassName.toLowerCase();
    return !!source.split(' ').find((c) => c.toLowerCase() === cssClassName);
}

export const addCssClass = (source, cssClassName) =>{
    if(isNullOrUndefined(cssClassName))
        return source;

    cssClassName = cssClassName.toLowerCase();

    if(hasCssClass(source))
        return source;
    return isNullOrUndefined(source) ? "" + cssClassName :  source + " " + cssClassName;
}

export const removeCssClass = (source, cssClassName) =>{
    if(isNullOrUndefined(cssClassName))
        return source;

    if(!hasCssClass(source))
        return source;

    cssClassName = cssClassName.toLowerCase();
    return source.split(" ").filter(c => c !== cssClassName && c.toLowerCase() !== cssClassName);
}

export const move = function(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
};