pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run') {
            steps {
                bat 'start "" npm start'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t easyshop:latest .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker run -d -p 3000:3000 easyshop:latest'
            }
        }
    }
}
