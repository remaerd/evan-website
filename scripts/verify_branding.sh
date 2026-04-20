#!/usr/bin/env bash
set -euo pipefail

CSS_FILE="css/styles.css"

if [[ ! -f "$CSS_FILE" ]]; then
  echo "ERROR: Missing $CSS_FILE"
  exit 1
fi

required_patterns=(
  "family=DM\+Sans"
  "--font:[[:space:]]*'DM Sans'"
  "--brand-primary:[[:space:]]*#0E3B2E;"
  "--primary:[[:space:]]*#216A4D;"
  "--brand-secondary:[[:space:]]*#1F8A70;"
  "--secondary:[[:space:]]*#4D6357;"
  "--tertiary:[[:space:]]*#3D6473;"
  "--accent:[[:space:]]*#FF6B3D;"
  "--surface:[[:space:]]*#F3F8F5;"
  "--background:[[:space:]]*#F5FBF5;"
  "--surface-container:[[:space:]]*#EAEFE9;"
  "--surface-container-low:[[:space:]]*#F0F5EF;"
  "--surface-elevated:[[:space:]]*#FFFFFF;"
  "--outline:[[:space:]]*#707973;"
  "--outline-variant:[[:space:]]*#C0C9C1;"
  "--text-primary:[[:space:]]*#121A16;"
  "--on-surface-variant:[[:space:]]*#404943;"
  "--text-muted:[[:space:]]*#4B5A54;"
  "--on-primary:[[:space:]]*#FFFFFF;"
)

for pattern in "${required_patterns[@]}"; do
  if ! /usr/bin/grep -Eiq -- "$pattern" "$CSS_FILE"; then
    echo "ERROR: Branding requirement failed for pattern: $pattern"
    exit 1
  fi
done

echo "Branding check passed for evan-website."
