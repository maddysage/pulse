const DRIVER_CONTROLLER = require('../controllers/driver_controller');

module.exports = (app) => {
    app.get('/api', DRIVER_CONTROLLER.greeting);
    app.post('/api/drivers', DRIVER_CONTROLLER.createDriver);
    app.put('/api/drivers/:id', DRIVER_CONTROLLER.editDriver);
    app.delete('/api/drivers/:id', DRIVER_CONTROLLER.deleteDriver);
};