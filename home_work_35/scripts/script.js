(function () {
    const ourList = document.getElementById("ulId");
    ourList.lastElementChild.innerText = "Hi! My names is George"
    const arr = [1, [2, 3, [4, 5], 6], [[7, 8], 9, 10], [[11]], 12, [13, [14, [15]]]];

    document.body.append(listBuilder(arr));

    function listBuilder(arr) {
        const list = document.createElement("ul");
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                list.append(listBuilder(arr[i]));
            } else {
                const newLi = document.createElement("li");
                newLi.innerText = arr[i];
                list.append(newLi);
            }
        }
        return list;
    }
    
    const table = document.createElement("table");
    let row = document.createElement("tr");

    for (let i = 0; i < 10 * 10; i++) {
        if ((i + 1) % 10 === 0) {
            let td = document.createElement("td")
            td.innerText = String(i + 1);
            row.append(td);
            table.append(row);
            row = document.createElement("tr");
        } else {
            const td = document.createElement("td");
            td.innerText = String(i + 1);
            row.append(td);
        }
    }
    document.body.append(table);


    const referenceTag = document.getElementById("ulId");
    const attrNames = [];
    const attrValues = [];

    const attr = referenceTag.attributes;

    for (const attribute of attr) {
        attrNames.push(attribute.name);
        attrValues.push(attribute.value);
    }
    console.log(attrNames);
    console.log(attrValues);

})();