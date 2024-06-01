/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pxpm8shgwczr7g2",
    "created": "2024-05-31 14:36:55.997Z",
    "updated": "2024-05-31 14:36:55.997Z",
    "name": "interaction_messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "go77oreh",
        "name": "content",
        "type": "editor",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
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
  const collection = dao.findCollectionByNameOrId("pxpm8shgwczr7g2");

  return dao.deleteCollection(collection);
})
