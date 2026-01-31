
if (typeof gdjs.evtsExt__PlayerAvatar__UserID !== "undefined") {
  gdjs.evtsExt__PlayerAvatar__UserID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlayerAvatar__UserID = {};
gdjs.evtsExt__PlayerAvatar__UserID.idToCallbackMap = new Map();


gdjs.evtsExt__PlayerAvatar__UserID.userFunc0xe00488 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {number} */
const parameterPlayerNumber = eventsFunctionContext.getArgument("PlayerNumber");

eventsFunctionContext.returnValue = gdjs.multiplayerMessageManager ? gdjs.multiplayerMessageManager.getPlayerId(parameterPlayerNumber) : "";

};
gdjs.evtsExt__PlayerAvatar__UserID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlayerAvatar__UserID.userFunc0xe00488(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlayerAvatar__UserID.func = function(runtimeScene, PlayerNumber, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlayerAvatar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlayerAvatar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PlayerNumber") return PlayerNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlayerAvatar__UserID.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlayerAvatar__UserID.registeredGdjsCallbacks = [];