const express = require ('express')
const ONgController = require('./controllers/OngControllers');
const IncidentController= require('./controllers/IncidentController')
const ProfileController= require('./controllers/ProfileController')
const SessionController= require('./controllers/SessionController')
const routes= express.Router();
routes.post("/sessions",SessionController.create)
routes.get("/ongs",ONgController.index )
routes.post("/ongs",ONgController.create);
routes.get("/profile",ProfileController.index);
routes.get("/incidents",IncidentController.index )
routes.post("/incidents",IncidentController.create)
routes.delete("/incidents/:id",IncidentController.delete)

 module.exports= routes;