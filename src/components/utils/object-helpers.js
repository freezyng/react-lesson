
const updateFollow = (items, itemsId, objPropName, newObjProp) => {
    return items.map((u) => {
        if (u[objPropName] === itemsId) {
            return { ...u, ...newObjProp }
        }
        return u;
    })
}


export { updateFollow };