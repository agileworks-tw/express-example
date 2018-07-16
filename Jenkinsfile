pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }

  }
  stages {
      
    stage('wellcome') {
      
      steps {
        sh 'node config/config.js'
        sh 'echo "hello $USERNAME"'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
    HOME = '.'

  }
}