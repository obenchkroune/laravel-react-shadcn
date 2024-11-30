# Laravel + React + TypeScript + shadcn/ui Starter Template

[![Laravel](https://img.shields.io/badge/Laravel-11.x-FF2D20?logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, production-ready full-stack web application starter template combining Laravel's robust backend with React's powerful frontend capabilities, enhanced with TypeScript and beautiful shadcn/ui components.

## 🌟 Features

-   **Backend Excellence**

    -   🎯 Laravel 11.x with modern PHP 8.3+ features
    -   🔒 Built-in authentication system via Laravel Breeze
    -   🚀 RESTful API support with structured responses
    -   📝 Comprehensive database migrations and seeders

-   **Frontend Power**
    -   ⚛️ React 18 with TypeScript for type-safe development
    -   🎨 Pre-configured shadcn/ui components
    -   🔄 Seamless SPA experience with Inertia.js
    -   🎭 Lightning-fast HMR with Vite
    -   🎯 Responsive layouts with Tailwind CSS

## 🚀 Prerequisites

-   PHP 8.2 or higher
-   Node.js 18 or higher
-   Composer 2.x
-   MySQL 8.0+ or PostgreSQL 13+

## ⚙️ Installation

1. Clone the repository:

```sh
git clone https://github.com/obenchkroune/laravel-shadcn-starter
cd laravel-shadcn-starter
```

2. Run the setup script:

```sh
chmod +x setup.sh
./setup.sh
```

## 🔧 Development

Start the development server:

```sh
composer run-script dev
```

## 📜 Available Scripts

-   `npm run build` - Build for production
-   `composer run-script dev` - Start Laravel + Vite development server in addition to the typescript types generator

## Typescript types generation

-   generate typescript types for
    -   Laravel Models
    -   PHP enums `app/Enums/**/*.php`
    -   Routes name and parameters types `route()`
    -   Form Requests `app/Http/Requests`

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## 🐛 Troubleshooting

If you encounter any issues, please check the following:

-   Ensure all prerequisites are installed and versions are correct.
-   Check the `.env` file for correct configuration.
-   Review the Laravel and React documentation for common issues.

## 🛠️ Tech Stack

-   [Laravel](https://laravel.com/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [shadcn/ui](https://ui.shadcn.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Inertia.js](https://inertiajs.com/)
-   [Vite](https://vitejs.dev/)

## 📄 License

MIT
