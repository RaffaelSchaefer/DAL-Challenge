/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i6b5850leg5qny6",
    "created": "2024-05-31 18:56:59.364Z",
    "updated": "2024-05-31 18:56:59.364Z",
    "name": "dla_user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cdtntbc6",
        "name": "isUser",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i6b5850leg5qny6");

  return dao.deleteCollection(collection);
})
