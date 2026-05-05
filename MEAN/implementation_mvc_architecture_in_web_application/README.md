# MVC Architecture in Web Application

This folder contains a browser-based MVC demo that separates the application into model, view, controller, and service files.

## Prerequisites

- A modern web browser
- A local web server

The demo uses JavaScript modules, so it should be served through a local server instead of opening `index.html` directly from the file system.

## Setup

No package installation is required for this demo.

Open a terminal in this folder:

```bash
cd MEAN/implementation_mvc_architecture_in_web_application
```

## Run

Start a local server with Node.js:

```bash
npx serve .
```

Open the URL shown in the terminal.

You can also use Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Important Files

- `index.html` - Main page and entry point
- `userModel.js` - User data model
- `userView.js` - UI rendering logic
- `userController.js` - Connects user actions to the model and view
- `userService.js` - Provides user data operations
