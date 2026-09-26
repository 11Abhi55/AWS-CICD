pipeline {
    agent any // हे जेनकिन्सला सांगते की काम कोणत्याही उपलब्ध सर्व्हरवर सुरू करा

    stages {
        // स्टेज १: GitHub वरून नवीन कोड डाउनलोड करणे
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository from GitHub...'
                // टीप: खालील लिंकमध्ये तुमचे खरे GitHub Username टाका
                git branch: 'main', url: 'https://github.com/11Abhi55/AWS-CICD'
            }
        }

        // स्टेज २: बॅकएंडसाठी लागणारे पॅकेजेस इन्स्टॉल करणे
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Deploy to EC2') {
            steps {
                echo 'Deploying application...'
                dir('backend') {
                    // आधीपासून सर्व्हर चालू असेल तर रीस्टार्ट करा, नसेल तर नवीन स्टार्ट करा
                    sh 'pm2 restart product-card-app || pm2 start server.js --name "product-card-app"'
                }
            }
        }
    }
}