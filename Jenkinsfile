pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                slackSend message: "Ha iniciado proceso de despliege de htintranet"
                echo 'Building..'
                bat "npm install"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                bat "ng build --prod"
            }
        }
        stage('Publish') {
            steps {    
                echo 'Deploying....'
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd stop apppool /apppool.name:htintranet"
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd stop site /site.name:htintranet"
                bat "copy /y \"${WORKSPACE}\\dist\\*.*\" \"C:/htintranet"
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd start apppool /apppool.name:htintranet"
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd start site /site.name:htintranet"
            }
        }
        stage('Notification') {
            steps {
                slackSend message: "Se ah actualizado htintranet"
            }
        }
    }
}