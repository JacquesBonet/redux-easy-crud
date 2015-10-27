# Redux EASY CRUD

redux-easy-crud is a library based on redux-crud?

It provide the following enhancements :

* helpers functions to speed redux crud application development

* a new api permitting to read a ressource from its id

* new transactionals api, permitting to create or update a set of ressources. If a update or write of a resource fail, the system is roolbacked to its origin.


### Testing

```
npm test
```

# Example

You can see [a basic example here](./example)

# Changelog

**0.7.0** Replaced `unsaved` in createStart and updateStart with `pendingCreate` and `pendingUpdate`.