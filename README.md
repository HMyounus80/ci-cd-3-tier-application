# 3-Tier Application with Ansible, Docker, and Jenkins

## Overview

This project demonstrates a **3-tier application** setup using modern DevOps practices. The application includes a **frontend**, **backend**, and **database**, all containerized using Docker. Configuration management is handled by **Ansible**, and **Jenkins** automates the CI/CD pipeline.

## Architecture

- **Backend**: Node.js application
- **Frontend**: React application (or your preferred framework)
- **Database**: MySQL/PostgreSQL
- **CI/CD**: Jenkins for automated builds and deployments

## Project Structure

```plaintext
├── ansible
│   ├── inventory
│   ├── playbooks
│   ├── roles
│   ├── vars
│   └── ansible.cfg
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── src
├── database
│   ├── Dockerfile
│   └── init.sql
├── frontend
│   ├── Dockerfile
│   └── src
├── jenkins
│   └── Jenkinsfile
├── docker-compose.yml
└── README.md
```

## Features

Ansible:

- Automated provisioning and configuration of the server.
- Secure management of sensitive data using Ansible Vault.

## Docker:

- Backend, frontend, and database services containerized.
- Docker Compose for multi-container orchestration.

## Jenkins:

- Continuous integration and delivery pipeline.
- Automates the build, test, and deployment stages.
- Setup Instructions

## Prerequisites

- Docker and Docker Compose installed.
- Ansible installed for provisioning.
- Jenkins set up for CI/CD.
- Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/HMyounus80/ci-cd-3-tier-application.git
   cd 3-tier-application
   ```

## Access the services:

Frontend: http://localhost
Backend API: http://localhost:3000/api/data

2. Deploy the application using Docker Compose:
   docker-compose up --build

3. For provisioning with Ansible, make sure to edit the vars/secrets.yml (use ansible-vault to manage secrets).

4. Set up Jenkins to run the Jenkinsfile for continuous integration.

## CI/CD Pipeline

### The Jenkins pipeline includes the following steps:

- Build: Build Docker images for each service.
- Test: Run unit tests.
- Deploy: Deploy containers to the environment.

## Security

- Secrets Management: All sensitive information is encrypted using Ansible Vault.

## Contributing

Feel free to contribute by opening a pull request or raising an issue.

## License

This project is licensed under the MIT License.

You can save this into your project directory as `README.md`. Let me know if you'd like any changes!
