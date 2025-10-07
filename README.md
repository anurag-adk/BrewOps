# BrewOps ☕

[![Build & Test](https://github.com/anurag-adk/brewops/actions/workflows/build-test.yml/badge.svg)](https://github.com/anurag-adk/brewops/actions/workflows/build-test.yml)
[![Publish & Release](https://github.com/anurag-adk/brewops/actions/workflows/release.yml/badge.svg)](https://github.com/anurag-adk/brewops/actions/workflows/release.yml)
[![Docker Image](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://github.com/anurag-adk/brewops/pkgs/container/brewops)
[![GitHub release](https://img.shields.io/github/v/release/anurag-adk/brewops?include_prereleases&logo=github&logoColor=white&color=blue)](https://github.com/anurag-adk/brewops/releases)
[![Node.js Version](https://img.shields.io/badge/node.js-18.x-brightgreen?logo=node.js)](https://nodejs.org/)

## 📌 Project Overview

**BrewOps** is a modern cafe management system built with Node.js and Express.js. This project demonstrates DevOps practices including CI/CD pipelines, containerization and automated deployment workflows.

The project was developed as part of the **LSPP DevOps Assignment** focusing on creating professional release workflows and demonstrating modern software deployment practices.

## 🌱 Features

- **RESTful API** - Complete cafe management endpoints with CRUD operations
- **CI/CD Implementation** - Automated build, test and release pipelines
- **Containerization** - Multi-stage Docker builds with security optimization
- **Security Integration** - Vulnerability scanning and secure deployment practices
- **Package Management** - Automated container registry deployment
- **Health Monitoring** - Built-in Docker health checks for production deployments
- **Release Automation** - Git tag-triggered releases with auto-generated changelog
  > Access the latest release [Here](https://github.com/anurag-adk/brewops/releases)

## 📝 API Endpoints

| Method | Endpoint  | Description                           |
| ------ | --------- | ------------------------------------- |
| `GET`  | `/`       | Welcome message and API documentation |
| `GET`  | `/menu`   | Retrieve coffee menu items            |
| `POST` | `/order`  | Place a new coffee order              |
| `GET`  | `/orders` | View all existing orders              |

## ⚙️ Setup and Installation

### 🐳 Using Docker (Recommended)

1. **Pull the latest image from GitHub Container Registry**:

   ```bash
   docker pull ghcr.io/anurag-adk/brewops:latest
   ```

2. **Run the container**:

   ```bash
   docker run -p 8000:8000 ghcr.io/anurag-adk/brewops:latest
   ```

3. **Access the application**:
   - Open Postman and acccess endpoints to `http://localhost:8000`

### 💻 Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anurag-adk/b\BrewOps.git
   cd BrewOps
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up `.env` file**:

   ```bash
   PORT = YOUR_PORT_NUMBER
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

## 🎯 Core Components

| Component       | Description                          | Technology             |
| --------------- | ------------------------------------ | ---------------------- |
| **API Server**  | RESTful coffee shop management       | Express.js             |
| **CI Pipeline** | Build, test and validation           | GitHub Actions         |
| **CD Pipeline** | Security scan and release automation | GitHub Actions + Trivy |
| **Container**   | Multi-stage optimized Docker image   | Docker + Alpine Linux  |
| **Security**    | Vulnerability scanning and hardening | Trivy + Non-root user  |
| **Testing**     | Comprehensive API test suite         | Jest + Supertest       |

## 🚀 Release Workflow

The project uses automated release pipelines that trigger on Git tags following semantic versioning

| Version Type  | Example  | Description                                                           |
| ------------- | -------- | --------------------------------------------------------------------- |
| Major Release | `v1.0.0` | Breaking changes that may not be backward compatible                  |
| Minor Release | `v1.1.0` | New features while keeping compatibility with previous versions       |
| Patch Release | `v1.0.1` | Small fixes or optimizations that don’t affect existing functionality |

### Release Process:

1. **Multi-stage Docker build** for optimized production images
2. **Security scanning** with Trivy for vulnerability detection
3. **Container registry deployment** to GitHub Packages (ghcr.io)
4. **Automated release creation** with generated changelog

### Creating a Release:

```bash
git tag v*
git push origin v*
```

This will automatically trigger the release pipeline and create a new GitHub release.

## ⚡ Advanced Features

### Pipeline Workflows

- **Build & Test**: Matrix testing across Node.js versions 18.x, 20.x, 22.x
- **Security Scanning**: Automated Trivy scans with SARIF reporting
- **Release Automation**: Tag-based releases with Docker image deployment

### Monitoring & Health Checks

- **Docker Health Checks**: Built-in application health monitoring
- **Pipeline Status**: Real-time build and deployment status badges
- **Security Reports**: Integrated vulnerability reporting

### Security Hardening

- **Multi-stage Builds**: Minimal attack surface with production-only dependencies
- **Non-root Execution**: Containers run as unprivileged user `brewops`
- **Vulnerability Management**: Automated security scanning and reporting

## 🔬 Research & Implementation

### **Release Action Research**

Extensive research was conducted to implement the optimal release workflow:

- **GitHub Actions Release**: Investigated `softprops/action-gh-release@v1` as the primary release automation tool
- **Changelog Generation**: Implemented `generate_release_notes: true` for automatic commit-based changelogs
- **Semantic Versioning**: Researched and implemented git tag-based triggering with `v*` pattern
- **Release Asset Management**: Studied automated artifact attachment and release metadata

### **Security Scanning Integration**

- **Trivy Research**: Evaluated Aqua Security Trivy as the container vulnerability scanner
- **SARIF Integration**: Implemented Security Alerts Report Interchange Format for GitHub Security tab
- **Pipeline Security**: Configured critical vulnerability pipeline failure with `exit-code: "1"`
- **Scan Optimization**: Focused scanning on `CRITICAL,HIGH` severity issues for efficiency

### **Container Registry Strategy**

- **GitHub Packages**: Researched ghcr.io as the optimal container registry for GitHub integration
- **Authentication**: Implemented `GITHUB_TOKEN` based authentication for secure deployments
- **Image Tagging**: Developed automatic Git tag to Docker tag mapping strategy
- **Multi-platform**: Investigated `linux/amd64` platform targeting for optimal compatibility

### **Multi-stage Docker Optimization**

- **Build Strategy**: Researched builder pattern for dependency optimization
- **Security Hardening**: Investigated non-root user implementation and attack surface reduction
- **Image Size**: Achieved ~196MB production image through staged dependency management
- **Health Monitoring**: Implemented Docker health checks for production deployment validation

## 🙏 Acknowledgments

_A Special Thank You To Our Mentors and Facilitators at Leapfrog especially Priyanka Tuladhar didi_
