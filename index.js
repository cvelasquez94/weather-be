const app = require('./app');
const PORT = process.env.PORT || 5000;

const start = () => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    })
}

start();

module.exports = app;