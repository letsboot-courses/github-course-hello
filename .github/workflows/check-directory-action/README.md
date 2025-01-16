# 🚀 Check Directory Action

This GitHub Action checks if a specified directory exists.

## Inputs

### `dir`

**Required** The directory path to check. Default is `./`.

## Usage

```yaml
name: Check Directory Example

on: [push]

jobs:
  check-dir:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Check if the 'src' directory exists
        uses: ./check-directory-action
        with:
          dir: './src'
