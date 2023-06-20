const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://3.6.91.30:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});
