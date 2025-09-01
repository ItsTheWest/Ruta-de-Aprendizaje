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

Git crea un repositorio local en la carpeta en la que estés ubicado en ese momento.
Dentro de esa carpeta se genera un subdirectorio oculto llamado .git/, que es donde Git guarda toda la información (historial, commits, ramas, etc.).

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
Al realizar tu primer push eso significa que a partir de ese momento Git ya sabe a qué remoto y a qué rama debe subir los cambios.Entoces de allí en adleante simplemnet puedes usar 

```bash
git push 
```
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
