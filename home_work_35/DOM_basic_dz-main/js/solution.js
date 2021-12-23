(function () {
    const allAttributes = Array.from(document.getElementById("ulId").attributes);
    const attributesArr = [];
    for (const value of allAttributes) {
        attributesArr.push(value.nodeValue);
    }

    console.log(attributesArr);
})();