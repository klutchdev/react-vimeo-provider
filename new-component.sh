#!/usr/bin/zsh
# Handle permission errors with chmod +x ./new-component.sh
cd src/components
echo "This generates boilerplate for new components!"
read -p "Enter category: " CATEGORY
mkdir $CATEGORY
cd $CATEGORY
touch "$CATEGORY.scss"
read -p "Enter component name (e.g Avatar): " COMPONENT
mkdir $COMPONENT
cd $COMPONENT
touch "index.ts"
touch "$COMPONENT.tsx"
touch "$COMPONENT.test.tsx"
echo "export { default as $Component } from './$Component';" >> "index.ts"
echo "Operation complete"