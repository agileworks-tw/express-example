pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }

  }
  stages {
    stage('wellcome') {
      steps {
        sh 'echo "wellcome to dojo !"'
      }
    }
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
    stage('teest') {
      steps {
        sh 'npm run test-jenkins'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
    HOME = '.'
  }
}