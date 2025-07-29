# 🚀 DevSecOps CI/CD Pipeline using GitHub Actions, Terraform, and Sealed Secrets

This project demonstrates a complete DevSecOps pipeline integrating security scanning, CI/CD automation, and secure secret management using GitHub Actions, Terraform, and Kubernetes Sealed Secrets.

---

## 📦 Tech Stack

- ⚙️ **Terraform** – Infrastructure provisioning  
- 🔐 **Sealed Secrets** – Secure Kubernetes secret management  
- 🐳 **Docker** – Containerization  
- ☸️ **Kubernetes (Minikube)** – Container orchestration  
- 🤖 **GitHub Actions** – CI/CD automation  
- 🔍 **Trivy** – Docker image scanning  
- 🛡️ **tfsec** – Terraform code security scan  
- ⚛️ **React** – Frontend application  

---

## ✅ Features Implemented

- CI/CD pipeline triggered on every push via GitHub Actions
- Security scans on:
  - Terraform (`tfsec`)
  - Docker images (`Trivy`)
- Kubernetes secrets managed via **Sealed Secrets**
- Secure deployment to Kubernetes cluster (Minikube)
- Auto-apply of SealedSecrets before deployment
- `NodePort` service to expose the React app locally

---

## 🛠️ GitHub Actions Workflow Steps

1. Checkout code
2. Run `tfsec` on Terraform code
3. Build Docker image and scan with `Trivy`
4. Apply Sealed Secrets to the cluster
5. Deploy workload to Kubernetes

---

## 📁 Project Structure

```
DevSecOps/
├── .github/workflows/         # CI/CD workflows
├── Devoapp/                   # React frontend app
├── k8s/                       # Kubernetes manifests (Deployment, Service, Secrets)
├── terraform/                 # Terraform configs
├── README.md
```

---

## 🔒 Secrets Management (Using Sealed Secrets)

- Secrets are encrypted using `kubeseal` and public cert from cluster.
- Encrypted secrets (`SealedSecret`) stored in Git, not plain secrets.
- Applied as part of the GitHub Actions deployment flow.

---

## 🚀 How to Run Locally (Dev Mode)

### 🧱 Prerequisites:
- Minikube installed
- Docker
- Terraform
- kubectl
- kubeseal
- Node.js for frontend

```bash
# Start Minikube
minikube start

# Apply manifests manually (if needed)
kubectl apply -f k8s/
```

---

## 🌐 Accessing the App

After deployment:

```bash
minikube service react-app-service
```

Or manually:

```bash
curl http://<MINIKUBE_IP>:<NODE_PORT>
```

Example:
```bash
curl http://10.55.86.39:30080
```

---

## 📸 Screenshots

_Add your screenshots of the GitHub Actions pipeline, app running, tfsec output, Trivy scan result, etc._

---

## 🙋‍♂️ Author

- **Jitesh Bhakat**  
- DevOps & Security Enthusiast  
- [GitHub Profile](https://github.com/Jitesh8260)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)