const app = require('./app');
const PORT = process.env.PORT || 3000;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    })
}

start();
