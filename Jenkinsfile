pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                slackSend message: "Ha iniciado proceso de despliege de \"${JOB_NAME}\""
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
                bat "npm run build --prod"
            }
        }
        stage('Publish') {
            steps {    
                echo 'Deploying....'
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd stop apppool /apppool.name:\"${JOB_BASE_NAME}\""
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd stop site /site.name:\"${JOB_BASE_NAME}\""
                bat "copy /y \"${WORKSPACE}\\dist\\*.*\" \"C:/${JOB_BASE_NAME}\""
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd start apppool /apppool.name:\"${JOB_BASE_NAME}\""
                bat "%SYSTEMROOT%/System32/inetsrv/appcmd start site /site.name:\"${JOB_BASE_NAME}\""
            }
        }
        stage('Notification') {
            steps {
                slackSend message: "Se ah actualizado \"${JOB_NAME}\""
            }
        }
    }
}