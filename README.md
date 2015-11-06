# Redux EASY CRUD

redux-easy-crud is a library based on redux-crud.

It provide the following enhancements :

* helpers functions to speed redux crud application development

* split the reducer on two reducers : reducer and status. Status reducer permits to be notified of errors

* add fetchStart and fetchError on the reducer (status)

To follow :

* Api permitting to read a ressource from its id

* Transactionals api, permitting to create or update a set of ressources. If the action fail, the system is roolbacked to its origin.

* Status historisation 



### Testing

```
npm test
```

# Example

You can see [a basic example here](./example)
