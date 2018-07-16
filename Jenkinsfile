pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }

  }
  stages {
    def config = readJSON file: "${env.WORKSPACE}/config/config.json"
    stage('wellcome') {
      
      steps {
        sh 'echo "hello ${config.username}"'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
    HOME = '.'
  }
}