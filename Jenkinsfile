pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }

  }
  stages {
    stage('wellcome') {
      steps {
        def config = readJSON file: "${env.WORKSPACE}/config/config.json"
        sh 'echo "hello ${config.username}"'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
    HOME = '.'
  }
}