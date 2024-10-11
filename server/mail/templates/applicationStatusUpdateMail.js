require('dotenv').config();

exports.applicationStatusUpdateMail = (applicantName, companyName, jobRole, status) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Application Update</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Application Update</div>
            <div class="body">
                <p>Dear ${applicantName},</p>
                <p>Your have been ${status} for the jobe role <span class="highlight">"${jobRole}"</span>. 
                    
                <p>You can check the application status at the link given below</p>
                <a class="cta" href="${process.env.BASE_URL}/dashboard/applicant/my-applications">View Application</a>
            </div>
        </div>
    </body>
    
    </html>`;
  };

// <div class="support">If you have any questions, please feel free to reach out to us at <a
//         href="mailto:info@studynotion.com">info@studynotion.com</a>. We are here to help!</div>
