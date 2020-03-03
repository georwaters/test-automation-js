# test-automation-js


## To run tests locally
```
yarn install 
npm run test:local
```

## To run tests in docker
### Make sure that docker is running
```
docker pull selenium/standalone-chrome
yarn install
npm run test:docker
```


## To view allure results: 
```
cd ./reports/allure-results
npx allure generate
npx allure open
```