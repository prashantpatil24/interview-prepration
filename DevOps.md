# DevOps & Backend Concepts for Frontend Interviews

---

# 1. Docker

## What is Docker?

Docker is a **containerization platform** that packages an application along with all its dependencies, libraries, and runtime into a **container**.

This ensures the application runs consistently across **development**, **testing**, and **production** environments.

### Benefits

- Consistent environments
- Lightweight
- Faster deployment
- Easy scaling
- Works well with CI/CD pipelines

### Flow

```text
Application
      +
Dependencies
      +
Runtime
      │
      ▼
 Docker Image
      │
      ▼
 Docker Container
```

---

## Docker vs Virtual Machine

| Docker | Virtual Machine |
|---------|-----------------|
| Lightweight | Heavy |
| Shares host OS kernel | Full guest OS |
| Starts in seconds | Takes minutes |
| Smaller image size | Larger disk usage |
| Better resource utilization | More resource-intensive |

---

## Interview Answer (2 Minutes)

> Docker is a containerization platform that packages an application with all its dependencies into a portable container. This ensures the application behaves the same across development, testing, and production environments. In my projects, Docker has been useful for creating consistent environments, simplifying deployments, and integrating with CI/CD pipelines.

---

# 2. Kafka

## What is Kafka?

Apache Kafka is a **distributed event streaming platform** used for **asynchronous communication** between microservices.

Think of Kafka as a **high-speed message broker**.

Instead of services calling each other directly, producers publish events to Kafka topics, and consumers process those events independently.

---

## Flow

```text
Producer
    │
    ▼
 Kafka Topic
    │
    ▼
Consumers
```

### Example

```text
Order Created
      │
      ▼
Kafka Topic
      │
      ├── Inventory Service
      ├── Email Service
      ├── Payment Service
      └── Analytics Service
```

---

## Kafka vs REST API

| Kafka | REST API |
|--------|----------|
| Asynchronous | Synchronous |
| Event-driven | Request/Response |
| High throughput | Lower throughput for heavy messaging |
| Loose coupling | Tighter coupling |
| Multiple consumers | Typically one client per request |

---

## Interview Answer (2 Minutes)

> Apache Kafka is a distributed event streaming platform used for asynchronous communication between microservices. Instead of services calling each other directly, producers publish events to Kafka topics, and consumers process those events independently. This improves scalability, fault tolerance, and loose coupling. A common example is an order event triggering inventory updates, email notifications, and analytics simultaneously.

---

# 3. CI/CD Pipeline

## What is CI/CD?

### CI = Continuous Integration

Automatically:

- Builds code
- Runs tests
- Performs code quality checks

for every commit or pull request.

---

### CD = Continuous Delivery / Continuous Deployment

Automatically deploys the application to:

- QA
- Staging
- Production

---

## Pipeline Flow

```text
Developer

   │

Git Push

   │

CI Server
(GitHub Actions / Jenkins / Azure DevOps)

   │

Install Dependencies

   │

Run Tests

   │

Code Quality Check

   │

Build

   │

Docker Image

   │

Deploy

   │

Production
```

---

## Typical React Pipeline

```text
Git Push

   │

npm install

   │

npm test

   │

npm run build

   │

SonarQube

   │

Docker Build

   │

Deploy to QA

   │

Approval

   │

Production
```

---

## CI vs CD

| CI | CD |
|----|----|
| Continuous Integration | Continuous Delivery / Deployment |
| Builds and tests code | Deploys code to environments |
| Detects integration issues early | Automates releases |
| Triggered on every commit | Triggered after successful CI |

---

## Interview Answer (2 Minutes)

> CI/CD is an automated software delivery process. Continuous Integration validates every code change by running builds, tests, and quality checks. Continuous Delivery or Deployment then packages the application and deploys it to QA, staging, or production environments. This reduces manual effort, catches issues early, and enables frequent, reliable releases.

---

# 4. GitHub Actions

## What is GitHub Actions?

GitHub Actions is **GitHub's built-in CI/CD platform**.

Whenever an event occurs (such as a push, pull request, or release), workflows run automatically.

Workflows are written in **YAML** files.

---

## Workflow

```text
Push Code

   │

GitHub

   │

Workflow (.yml)

   │

Install Dependencies

   │

Run Tests

   │

Build

   │

Deploy
```

---

## Example Workflow

**.github/workflows/react.yml**

```yaml
name: React CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - run: npm test

      - run: npm run build
```

---

## Workflow Structure

```text
Workflow
    │
    ▼
Jobs
    │
    ▼
Steps
    │
    ▼
Actions
```

### Example

```text
Workflow
    │
Build Job
    │
 ├── Install
 ├── Test
 ├── Build
 └── Deploy
```

---

## CI/CD Tools Comparison

| Tool | Purpose | Best For |
|------|---------|----------|
| GitHub Actions | CI/CD | GitHub repositories |
| Jenkins | CI/CD | Highly customizable enterprise pipelines |
| Azure DevOps | CI/CD + Boards + Repos | Microsoft ecosystem |
| GitLab CI | CI/CD | GitLab repositories |
| CircleCI | CI/CD | Cloud-native automation |

---

## Interview Answer (2 Minutes)

> GitHub Actions is GitHub's native automation and CI/CD service. Workflows are defined in YAML files and are triggered by events such as pushes or pull requests. A typical workflow checks out the code, installs dependencies, runs tests, builds the application, and can deploy it automatically. It's widely used for React, Node.js, Java, and Spring Boot projects because it integrates seamlessly with GitHub repositories.

---

# Senior Interview Summary

## Docker

> **Docker packages an application and all its dependencies into lightweight containers, ensuring consistent execution across environments.**

---

## Kafka

> **Kafka is an event streaming platform that enables asynchronous, scalable, and loosely coupled communication between microservices.**

---

## CI/CD

> **CI/CD automates building, testing, and deploying software, enabling faster and more reliable releases.**

---

## GitHub Actions

> **GitHub Actions is GitHub's built-in CI/CD platform that automates workflows such as testing, building, and deployment using YAML-based configuration files.**

---

# Memory Tricks

```text
Docker
→ Package & Run Anywhere

Kafka
→ Event Streaming / Message Broker

CI
→ Build + Test

CD
→ Deploy

GitHub Actions
→ GitHub Automation
```

# Deployment Strategies

Deployment strategies define **how a new version of an application is released to users** while minimizing downtime and reducing deployment risk.

| Deployment Strategy | Downtime | Rollback | Use Case |
|---------------------|----------|----------|----------|
| ✅ **Blue/Green** | **Zero or Near-Zero** | ⭐ Very Fast | Production releases with minimal disruption |
| **Rolling** | Minimal (Not Guaranteed Zero) | Moderate | Kubernetes, Microservices |
| **Canary** | Minimal | Fast | Gradual rollout to a small percentage of users |
| **In-place (Recreate)** | ❌ Yes | Slow | Small applications, Development environments |

