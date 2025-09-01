# Guía básica para subir un proyecto con Git

Esta es una documentación sencilla para entender lo básico de Git y cómo subir un proyecto a un repositorio remoto (por ejemplo, GitHub).

---

## ¿Qué es Git y para qué sirve?

![Logo de Git](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

**Git** es un sistema de control de versiones distribuido.  
Sirve para llevar un historial de cambios de tu proyecto, trabajar en equipo sin perder trabajo y tener un respaldo seguro del código.

Con Git puedes:  
- Guardar versiones de tu proyecto (**commits**).  
- Trabajar en paralelo con otras personas sin sobrescribir tu trabajo.  
- Probar ideas nuevas sin romper la versión estable (con **ramas**).  
- Subir tu proyecto a plataformas como **GitHub**, **GitLab** o **Bitbucket**.  

En resumen, Git ayuda a organizar, guardar y compartir tu código de forma segura.

---

## 1. Configuración inicial

Primero asegúrate de tener Git instalado. Luego configura tu nombre de usuario y correo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

Puedes verificar la configuración con:

```bash
git config --list
```

---

## 2. Crear un repositorio local

Entra a la carpeta de tu proyecto y ejecuta:

```bash
git init
```

Esto creará un nuevo repositorio Git en esa carpeta.

![Repositorio local](https://wac-cdn.atlassian.com/dam/jcr:37a1e3e5-30a9-4b62-a0e6-04d6b8b8f52e/hero.svg?cdnVersion=1216)

---

## 3. Agregar archivos al repositorio

Para agregar todos los archivos del proyecto:

```bash
git add .
```

Para agregar un archivo específico:

```bash
git add nombre_archivo.ext
```

---

## 4. Crear un commit

Un **commit** guarda los cambios en el historial del repositorio:

```bash
git commit -m "Mensaje descriptivo de lo que hiciste"
```

Ejemplo:

```bash
git commit -m "Inicializando proyecto"
```

![Commit ejemplo](https://miro.medium.com/v2/resize:fit:640/format:webp/1*v2QwaYJtW05gtn-8_Xw76A.png)

---

## 5. Conectar con un repositorio remoto

Primero, crea un repositorio en GitHub (sin README si ya tienes uno local).  
Luego enlaza tu repositorio local con el remoto:

```bash
git remote add origin https://github.com/usuario/nombre-repo.git
```

Puedes verificar con:

```bash
git remote -v
```

---

## 6. Subir los cambios al remoto

Para subir la rama principal (main o master, depende de tu configuración):

```bash
git push -u origin main
```

(En algunos casos puede ser `master` en vez de `main`).

![Push a GitHub](https://kinsta.com/wp-content/uploads/2023/07/git-push-command-1024x512.png)

---

## 7. Pasos comunes después

- Ver cambios pendientes:
  ```bash
  git status
  ```

- Ver historial de commits:
  ```bash
  git log
  ```

- Actualizar tu repositorio con cambios del remoto:
  ```bash
  git pull origin main
  ```

---

## 8. Flujo básico resumido

1. `git init` (si es un proyecto nuevo)
2. `git add .`
3. `git commit -m "mensaje"`
4. `git remote add origin <url>`
5. `git push -u origin main`

---

✅ Con esto ya tienes lo básico para iniciar con Git y subir tus proyectos.

