pipeline{
    agent {
        label 'web_services'
    }

    stages{
        stage('update files'){
            steps{
                sh '''
                    cd ~/PinBot
                    git pull
                '''
            }
        }
    }
}
