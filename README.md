# Node Api - Weather

## Setup and Run

* Clone this repository
* Choose one of these project: `cd weather-be`
* Install dependencies: `npm install or yarn install`
* Access the url: http://localhost:5000
* Endpoints:
  * Current weather: `GET /v1/current`
  * Forecast of week : `GET /v1/forecast`
  * Finding forecast of week for city: `GET /v1/forecast/:city`
* Generate key for use OpenWeatherMap: https://openweathermap.org/api
    * Remplace you key:  
    ```js
    module.exports = {
      baseUrl: {
        protocol: 'http',
        hostname: 'api.openweathermap.org',
        path: '/data/2.5',
      },
      ApiKey: 'YOU KEY'
    }
    ```
* Start server: `npm start` or for mode dev `npm start:dev`

## Test

* Start test : `npm test or yarn test`
* Show tests in html : `cd coverage/lcov-report`
    * `open index.html`   

## Collaborators
- [Carlos Velasquez](https://twitter.com/@carlosbrunotbc)

## License

[MIT](https://opensource.org/licenses/MIT)