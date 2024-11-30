#! /bin/bash

set -e

# install php dependencies
composer install

# install node dependencies
echo "Select your preferred package manager:"
PS3="Choose a package manager (1-4): "
package_managers=("npm" "yarn" "pnpm" "bun")
select pm in "${package_managers[@]}"; do
    case $pm in
        "npm")
            echo "Installing with npm..."
            npm install
            break
            ;;
        "yarn")
            echo "Installing with yarn..."
            yarn install
            break
            ;;
        "pnpm")
            echo "Installing with pnpm..."
            pnpm install
            break
            ;;
        "bun")
            echo "Installing with bun..."
            bun install
            break
            ;;
        *) 
            echo "Invalid option $REPLY"
            ;;
    esac
done

# copy enirement file
cp .env.example .env

# generate app key
php artisan key:generate

# run migrations
php artisan migrate

prompt_yes_no() {
    while true; do
        read -p "$1 (y/n): " answer
        case $answer in
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Please answer y or n.";;
        esac
    done
}

# Generate IDE helper files
if prompt_yes_no "Do you want to generate IDE helper files?"; then
    echo "Generating IDE helper files..."
    php artisan ide-helper:generate
    php artisan ide-helper:eloquent
    php artisan ide-helper:models --nowrite
else
    echo "Skipping IDE helper files generation"
fi

# Ask to run composer dev
if prompt_yes_no "Do you want to run composer dev script?"; then
    echo "Running composer dev script..."
    composer run-script dev
else
    echo "Skipping composer dev script"
fi
