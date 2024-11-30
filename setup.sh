#! /bin/bash

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

# Ask to run composer dev
if prompt_yes_no "Do you want to run composer dev script?"; then
    echo "Running composer dev script..."
    composer run dev
else
    echo "Skipping composer dev script"
fi
