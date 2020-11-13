# Identity
Name : Muhammad Rafli Jatnika

# Error & Bugs
Error When Delete CheckList If Checklist Have Item
```json
{
  error: "Internal Server Error"
  message: "could not execute statement; SQL [n/a]; constraint ["FKXLX6Y62KMAQRE6PNSW37K517: PUBLIC.CHECKLIST_ITEM_ENTITY FOREIGN KEY(CHECKLIST_CHECKLIST_ID) REFERENCES PUBLIC.CHECKLIST_ENTITY(CHECKLIST_ID) (1)"; SQL statement:↵delete from checklist_entity where checklist_id=? [23503-200]]; nested exception is org.hibernate.exception.ConstraintViolationException: could not execute statement"
  path: "/checklist/1"
  status: 500
  timestamp: "2020-11-13T11:20:59.401+0000"
}
```

Error When Delete Item
```json
{
  error: "Internal Server Error"
  message: "could not execute statement; SQL [n/a]; constraint ["FKXLX6Y62KMAQRE6PNSW37K517: PUBLIC.CHECKLIST_ITEM_ENTITY FOREIGN KEY(CHECKLIST_CHECKLIST_ID) REFERENCES PUBLIC.CHECKLIST_ENTITY(CHECKLIST_ID) (1)"; SQL statement:↵delete from   checklist_entity where checklist_id=? [23503-200]]; nested exception is org.hibernate.exception.              ConstraintViolationException: could not execute statement"
  path: "/item/1"
  status: 500
  timestamp: "2020-11-13T11:19:13.978+0000"
}
```

When Rename Item The Server Not Response Any Change
```json
{
  data: {id: 5, name: "Aku", itemCompletionStatus: true}
  errorMessage: null
  message: "Proses update berhasil"
  statusCode: 2200
}
```