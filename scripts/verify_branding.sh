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
  "--primary:[[:space:]]*#216A4D;"
  "--on-primary:[[:space:]]*#FFFFFF;"
  "--primary-container:[[:space:]]*#A9F2CC;"
  "--secondary:[[:space:]]*#4D6357;"
  "--tertiary:[[:space:]]*#3D6473;"
  "--surface:[[:space:]]*#F5FBF5;"
  "--background:[[:space:]]*#F5FBF5;"
  "--surface-container:[[:space:]]*#EAEFE9;"
  "--surface-container-low:[[:space:]]*#F0F5EF;"
  "--surface-elevated:[[:space:]]*#FFFFFF;"
  "--outline:[[:space:]]*#707973;"
  "--outline-variant:[[:space:]]*#C0C9C1;"
  "--inverse-surface:[[:space:]]*#2C322E;"
  "--inverse-primary:[[:space:]]*#8ED5B1;"
  "--on-surface-variant:[[:space:]]*#404943;"
)

for pattern in "${required_patterns[@]}"; do
  if ! /usr/bin/grep -Eiq -- "$pattern" "$CSS_FILE"; then
    echo "ERROR: Branding requirement failed for pattern: $pattern"
    exit 1
  fi
done

echo "Branding check passed for evan-website."
