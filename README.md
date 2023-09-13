# Deployager

## Description

This project is a simple web application for managing the deployment and operation of various apps in different environments. It features a basic frontend built with vanilla JS and a backend using Express.js to interact with Docker or Kubernetes daemons.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [File Structure](#file-structure)
4. [License](#license)

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or later)
- Docker

### Steps
1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Build the Docker image using the command: 
   ```sh
   docker build -t my-nodejs-app .
