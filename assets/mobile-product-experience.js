(() => {
  function init(bar) {
    if (bar.dataset.initialized) return;

    const productInfo = bar.closest('product-info');
    const original = productInfo?.querySelector(
      '[id="ProductSubmitButton-' + bar.dataset.sectionId + '"]'
    );
    const mobileButton = bar.querySelector('[data-mobile-cart-button]');
    if (!original || !mobileButton) return;

    bar.dataset.initialized = 'true';
    productInfo.classList.add('has-mobile-product-bar');
    document.body.appendChild(bar);

    function sync() {
      mobileButton.disabled = original.disabled;
      mobileButton.textContent =
        original.querySelector('span')?.textContent.trim() ||
        original.textContent.trim();
    }

    mobileButton.addEventListener('click', () => {
      if (!original.disabled) original.click();
    });

    new MutationObserver(sync).observe(original, {
      attributes: true,
      attributeFilter: ['disabled'],
      childList: true,
      subtree: true
    });

    new IntersectionObserver(([entry]) => {
      bar.classList.toggle('is-visible', !entry.isIntersecting);
    }, { threshold: 0.1 }).observe(original);

    sync();
  }

  function initAll() {
    document.querySelectorAll('[data-mobile-product-bar]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
  document.addEventListener('shopify:section:load', initAll);
})();
