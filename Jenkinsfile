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
    }
}
