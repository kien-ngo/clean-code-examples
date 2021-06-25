// This is a piece of code that copies a selected properties of one object to another

ToClone.DataId = toclone.DataId;
ToClone._ID = toclone._ID;
ToClone.JsonPath = toclone.JsonPath;
ToClone.MapParam = toclone.MapParam;
ToClone.MapParamX = toclone.MapParamX;
ToClone.MapParamY = toclone.MapParamY;
ToClone.MatRotation = toclone.MatRotation;
ToClone.MatTileParam = toclone.MatTileParam;
if(!saveRotation){
    ToClone.SaveRotation = toclone.SaveRotation;
}else{
    ToClone.SaveRotation = saveRotation;
}

if(toclone.mystoredlightmap) ToClone.mystoredlightmap = toclone.mystoredlightmap;
if(toclone.mystoredbakemap) ToClone.mystoredbakemap = toclone.mystoredbakemap;
ToClone.meshtilingOG = toclone.meshtilingOG;
ToClone.aabb = toclone.aabb;
ToClone.OffsetXParam = toclone.OffsetXParam;
ToClone.OffsetYParam = toclone.OffsetYParam;
