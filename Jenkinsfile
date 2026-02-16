pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd app && npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 7, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
	stage('Build Docker Image') {
    	    steps {
        	sh '''
        		docker build -t devops-app:${BUILD_NUMBER} .
        		docker images | grep devops-app
        	   '''
    }
}


    }
}

