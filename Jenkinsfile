pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Stop old container if running
                bat 'docker stop easyshop || echo "No container to stop"'
                bat 'docker rm easyshop || echo "No container to remove"'

                // Remove old image if exists
                bat 'docker rmi easyshop:latest || echo "No old image to remove"'

                // Build new image
                bat 'docker build -t easyshop:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                // Run fresh container on port 3001
                bat 'docker run -d -p 3001:3001 --name easyshop easyshop:latest'
            }
        }
    }
}
}
