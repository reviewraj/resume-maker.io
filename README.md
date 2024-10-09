# resume-maker
Resume Maker is a static web application that allows users to create, customize, and download their resumes. The application provides a user-friendly interface to input personal details, select a resume template, and generate a downloadable PDF.

# before cloning the repository please follow the below steps 
* please execute the below provuide commands with details 
 ``` git
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```
# after that follow the below process to genrate personal access token (PAT) to clone the private repository 
To generate a personal access token (PAT) on GitHub, you need to have the necessary permissions on the repository. Usually, this means you need to be the repository owner or have collaborator access to the repository. Here's how you can generate a PAT:
```
title: resume-maker
author: me
version: v1
```
Steps to Generate a Personal Access Token on GitHub
Log in to GitHub:

Go to github.com and log in with your GitHub credentials.
Navigate to Personal Access Tokens:

Click on your profile picture in the upper-right corner of the GitHub page and select Settings.
In the left-hand menu, click on Developer settings.
Click on Personal access tokens.
Click on Tokens (classic) (for older tokens) or Fine-grained tokens (for more granular permissions).
Generate a New Token:

Click on Generate new token.
If you're generating a classic token, click Generate new token (classic).
Give your token a descriptive name.
Select Scopes or Permissions:

Choose the scopes or permissions you need. For accessing a private repository, you'll need at least the repo scope.
If you want to be more specific, you can choose more granular permissions under Fine-grained tokens.
Generate the Token:

Click the Generate token button at the bottom of the page.
GitHub will display your new token. Copy it immediately as it will only be shown once.
Use the Personal Access Token
Once you have the personal access token, you can use it to authenticate with GitHub when cloning, pulling, or pushing to private repositories.

Example: Cloning a Private Repository Using HTTPS
Clone the Repository:
bash
Copy code
git clone https://github.com/username/repository-name.git
Authenticate:
When prompted for your GitHub username, enter your username.
When prompted for your password, paste the personal access token.
Summary
Only the repository owner or collaborators with the necessary permissions can generate a PAT.
PATs are used for authenticating Git operations over HTTPS.
Always keep your PAT secure and never expose it publicly.

# steps to push the code from local repository to remote repository

# Initialize git if not already done 
``` 
git init
```
# Add remote repository
```
git remote add origin https://github.com/yourusername/your-repo.git
```

# Stage all changes
```
git add
```
# Commit with a message
```
git commit -m "Initial commit"
```

# Push changes to the main branch
```
git push -u origin main
```
