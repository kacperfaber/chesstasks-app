# ChessTasks.com
 Cross-Platform Application

## Versions

| **#**            |    DATE    | TYPE |
|------------------|:----------:|------|
| **1.0.0-beta.1** | 05.09.2023 | beta |


## Installation

#### App to run properly requires the API connection.
[See Api Repository](https://www.github.com/kacperfaber/chesstasks-server)

#### First clone the project
This command will clone the entire git repository, and will change current working directory to app.
```bash
git clone https://www.github.com/kacperfaber/chesstasks-app && cd chesstasks-app
```

#### Install dependencies
```bash
npm install
```


#### Modify run options
Fill the const 'config' with your API url and set the **API-KEY**.
```bash
vim webpack.config.dev.js
```


#### Run the app in developer mode
Will compile the code, and will host the app with serve.
```bash
npm run run-dev
```

#### Build the app, 

## Author

Kacper Faber
