# Full Stack Deployment using Docker & AWS EC2

## 📌 Project Overview

This project is a full-stack application deployed on **AWS EC2** using **Docker & Docker Compose**.

* 🌐 Frontend: React (served using Nginx)
* ⚙️ Backend: Node.js + Express
* 🐳 Containerization: Docker
* ☁️ Cloud: AWS EC2 (Ubuntu)
* 🔥 Deployment: Docker Compose

---

## 🏗️ Project Structure

```
Full_stack_deployment/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

---

## ⚙️ Backend API

The backend exposes a simple API endpoint:

```
GET /
```

Response:

```json
{
  "message": "Hello from Backend 🚀",
  "environment": "development"
}
```

Backend runs on:

```
http://<EC2-PUBLIC-IP>:5000
```

---

## 🌍 Frontend

The frontend is built using React and served via Nginx container.

Frontend runs on:

```
http://<EC2-PUBLIC-IP>:3000
```

---

## 🐳 Docker Setup

### Backend Dockerfile

* Uses `node:18`
* Installs dependencies
* Exposes port 5000

### Frontend Dockerfile

* Multi-stage build
* Builds React app
* Serves via Nginx

---

## 🚀 Deployment Steps (AWS EC2)

### 1️⃣ Launch EC2 Instance

* OS: Ubuntu
* Open Ports:

  * 22 (SSH)
  * 3000 (Frontend)
  * 5000 (Backend)

### 2️⃣ Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu
```

### 3️⃣ Install Docker Compose

```bash
sudo apt install docker-compose -y
```

### 4️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd Full_stack_deployment
```

### 5️⃣ Run Application

```bash
docker-compose up --build -d
```

### 6️⃣ Check Running Containers

```bash
docker ps
```

---

## 🔍 Troubleshooting

### 🔹 Permission Denied (Docker Socket)

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### 🔹 Backend Not Opening

* Ensure Security Group allows port 5000
* Ensure backend listens on `0.0.0.0`

---

## 💡 Future Improvements

* Use Nginx reverse proxy
* Setup custom domain
* Enable HTTPS (SSL)
* Configure CI/CD pipeline
* Use Elastic IP

---

## 👩‍💻 Author

Aishwarya Bhand
DevOps Enthusiast 🚀
