// We can reduce the text footprint by utilizing the for-each

const toBeCopiedAttrs = [
    'DataId', 
    '_ID',
    'JsonPath', 
    'MapParamX', 
    'MapParamY', 
    'MatRotation', 
    'MatTileParam', 
    'meshtilingOG', 
    'aabb', 
    'model',
    'OffsetXParam', 
    'OffsetYParam',
    'mystoredlightmap',
    'mystoredbakemap',
    '... add whatever attr you want in this array'
];

toBeCopiedAttrs.forEach(key => ToClone[key] = (toclone[key]) ? toclone[key] : undefined); 