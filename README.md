# Laravel + React + TypeScript + shadcn/ui Starter Template

[![Laravel](https://img.shields.io/badge/Laravel-11.x-FF2D20?logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, production-ready full-stack web application starter template combining Laravel's robust backend with React's powerful frontend capabilities, enhanced with TypeScript and beautiful shadcn/ui components.

## 🌟 Features

- **Backend Excellence**

  - 🎯 Laravel 10.x with modern PHP 8.2+ features
  - 🔒 Built-in authentication system via Laravel Breeze
  - 🚀 RESTful API support with structured responses
  - 📝 Comprehensive database migrations and seeders

- **Frontend Power**
  - ⚛️ React 18 with TypeScript for type-safe development
  - 🎨 Pre-configured shadcn/ui components
  - 🔄 Seamless SPA experience with Inertia.js
  - 🎭 Lightning-fast HMR with Vite
  - 🎯 Responsive layouts with Tailwind CSS

## 🚀 Prerequisites

- PHP 8.2 or higher
- Node.js 18 or higher
- Composer 2.x
- MySQL 8.0+ or PostgreSQL 13+

## ⚙️ Installation

1. Clone the repository:

```sh
git clone https://github.com/obenchkroune/laravel-shadcn-starter
cd laravel-shadcn-starter
```

2. Install PHP dependencies:

```sh
composer install
```

3. Install Node.js dependencies:

```sh
npm install
```

4. Configure environment:

```sh
cp .env.example .env
php artisan key:generate
```

5. Setup database:

- Update `.env` with your database credentials

- Run migrations:

```sh
php artisan migrate
```

## 🔧 Development

Start the development server:

```sh
composer run-script dev
```

Other useful commands:

- **Run tests**:

```sh
php artisan test
```

- **Lint and fix PHP code**:

```sh
composer run-script lint
```

- **Lint and fix JavaScript/TypeScript code**:

```sh
npm run lint
```

## 🏗️ Building for Production

```sh
npm run build
```

## 🚀 Deployment

1. Build the project:

```sh
npm run build
```

2. Deploy the `public` and `inertia` directories to your web server.

3. Ensure your server is configured to serve the `public` directory as the web root.

## 📂 Project Structure

```
├── app/                    # Laravel application code
├── inertia/               # React + TypeScript frontend
│   ├── components/        # Reusable React components
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Page components
│   ├── lib/              # Utilities and helpers
│   └── app.tsx           # Main React application
├── routes/                # Laravel routes
├── public/               # Static assets
└── resources/            # Additional resources
```

## 📜 Available Scripts

- `npm run build` - Build for production
- `composer run-script dev` - Start Laravel + Vite development server

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## 🐛 Troubleshooting

If you encounter any issues, please check the following:

- Ensure all prerequisites are installed and versions are correct.
- Check the `.env` file for correct configuration.
- Review the Laravel and React documentation for common issues.

## 🛠️ Tech Stack

- [Laravel](https://laravel.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Inertia.js](https://inertiajs.com/)
- [Vite](https://vitejs.dev/)

## 📄 License

MIT
