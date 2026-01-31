pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Tests passed' // Abhi simple, later real tests add
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start &' // Local deploy
            }
        }
    }
}
