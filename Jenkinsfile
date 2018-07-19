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
        bat 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test-jenkins'
      }
    }
    stage('report') {
      steps {
        junit 'jenkins-test-results.xml'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
    HOME = '.'
  }
}