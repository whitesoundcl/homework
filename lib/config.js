/**
 * Creates and exports configuration variables
 */

 // Container for all the enviroment constants
var enviroments = {};

// Stagging
enviroments.staging = {
    "httpPort" : 3000,
    'envName': "staging",
};

// Production
enviroments.production = {
    "httpPort" : 5000,
    "envName" : "production",
};


var currentEnviroment = typeof(process.env.NODE_ENV) == "string" ? process.env.NODE_ENV.toLowerCase() : '';

var enviromentToExport = typeof(enviroments[currentEnviroment]) == "object" ? enviroments[currentEnviroment] : enviroments.staging;

module.exports = enviromentToExport;
