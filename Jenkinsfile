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
	    when {
		branch 'prod'
	}
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
	stage('Tag Image') {
    	steps {
        	sh '''
        	docker tag devops-app:${BUILD_NUMBER} abhishek7380/devops-app:${BUILD_NUMBER}
        	docker tag devops-app:${BUILD_NUMBER} abhishek7380/devops-app:latest
        	'''
    		}
	}

	stage('Push Image') {
    		steps {
        	sh '''
        	docker push abhishek7380/devops-app:${BUILD_NUMBER}
        	docker push abhishek7380/devops-app:latest
        	'''
    	      }
	}


    }
}

