function breadthFirstSearch(root) {
    const queue = [root];
    let visited = new Set();
    while (queue) {
        const node = queue.shift();
        console.log(document.root)
        if (node) queue.unshift(node)
    }
}

function findElementById(id) { // ID = header
    // Return the element in the DOM with corresponding `id`
    console.log(documents)
    console.log(id)
    breadthFirstSearch(id)
}

function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
}

function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
}

function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
}

function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
}

export {
    findElementById,
    findFirstElementOfTag,
    findFirstElementOfClass,
    findElementsOfTag,
    findElementsOfClass
}
