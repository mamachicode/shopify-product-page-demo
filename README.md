# Shopify mobile product page demo

A personal Shopify theme development sample built on [Shopify Dawn 16.0.0](https://github.com/Shopify/dawn).

## What I built

- A mobile Add to Cart bar that appears when the original product button scrolls out of view.
- The bar uses the existing Dawn product form, so it adds the selected product through Dawn's cart flow.
- A delivery information block below the purchase buttons.
- Responsive styling for the product page.

## Implementation

The changes are in `sections/main-product.liquid`, `snippets/mobile-product-experience.liquid`, and the matching CSS and JavaScript files in `assets/`.

## Verification

Tested on a Shopify development store at a 400 px mobile viewport. The sticky button added a product and opened the cart confirmation with one item.

This is a personal portfolio sample, not client work. The store is a password-protected development store.
