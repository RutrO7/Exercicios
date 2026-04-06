"Testando o readme.md, com isso, vou explicar o que cada topico que eu estou codando faz, para que, além de poder absorver o conhecimento, eu já aprendo mais a como lidar com o readme!"

# 🐳 Docker Containers - Guia Prático

## 📌 Diferença entre Imagem e Container

As imagens e os containers Docker são conceitos diferentes dentro do ecossistema.

### 📦 Imagem Docker

- É uma versão empacotada de uma aplicação
- Contém código, dependências, bibliotecas e tudo necessário para rodar
- Funciona como um **modelo (somente leitura)**
- Pode ser criada com Dockerfile ou baixada do Docker Hub

---

### ▶️ Container Docker

- É uma **instância em execução** de uma imagem
- Leve, isolado e executável
- Pode ser iniciado, parado e removido

---

### 💡 Resumo

> Imagem = receita / modelo
> Container = aplicação rodando

---

## ⚙️ Instalação do Docker (Linux)

```bash
sudo apt install docker.io docker-compose
```

Ativar o Docker no boot:

```bash
sudo systemctl enable --now docker docker.socket containerd
```

---

## 📚 Comandos básicos

### 🔍 Ver ajuda

```bash
docker --help
```

---

## 🌎 Docker Hub

https://hub.docker.com

---

## 🔐 Acesso como super usuário

```bash
sudo su
```

⚠️ Observação:
Não é obrigatório usar root. Uma alternativa mais segura é adicionar seu usuário ao grupo docker.

---

## 📥 Baixar uma imagem

```bash
docker pull nome-da-imagem
```

### Exemplo:

```bash
docker pull wordpress
```

---

## 📦 Listar imagens

```bash
docker images
```

---

## ▶️ Criar e rodar um container (WordPress)

```bash
docker run --name meu_wordpress -p 8080:80 -d wordpress
```

### Explicação:

- `docker run` → executa container
- `--name` → nome do container
- `-p 8080:80` → mapeamento de porta
- `-d` → modo background
- `wordpress` → imagem utilizada

---

## 🌐 Acessar no navegador

http://localhost:8080/

---

## 📋 Ver containers em execução

```bash
docker ps
```

---

## 📋 Ver todos os containers

```bash
docker ps -a
```

---

## 🧪 Exemplo com Ubuntu

```bash
docker pull ubuntu
docker run -it ubuntu
```

---

## ⏹️ Parar um container

```bash
docker stop id-ou-nome
```

### Exemplo:

```bash
docker stop meu_wordpress
```

---

## ▶️ Iniciar container parado

```bash
docker start id-ou-nome
```

---

## 🔄 Reiniciar container

```bash
docker restart id-ou-nome
```

---

## 🧹 Remover container

```bash
docker stop id-ou-nome
docker rm id-ou-nome
```

---

## 🗑️ Remover imagem

```bash
docker rmi id-ou-nome
```

⚠️ É necessário remover os containers antes.

---

## 🚀 Conclusão

- Docker facilita rodar aplicações em qualquer ambiente
- Imagens são modelos
- Containers são execuções

### 🧠 Comandos principais:

- `pull`
- `run`
- `ps`
- `stop`
- `start`
- `rm`
- `rmi`

---
