<template>
  <div
    id="snipcart"
    hidden
    data-api-key="M2YwOGIxZDYtNTE3NC00MDY0LTkxNTItOTMwOTViOWFlNjVhNjM2ODE4MTgxMzg0OTUwNjUz"
  ></div>
</template>

<style>
body,
.snipcart-cart--opened {
  overflow: visible !important;
}
.snipcart,
.snipcart__font--secondary,
.snipcart__font--subtitle {
  font-family: var(--main-font-family);
}
.snipcart__box--badge-highlight {
  background: none;
  border-color: var(--main-text-colour);
  color: var(--main-text-colour);
}
.snipcart-cart-button--highlight {
  background-image: none;
  background-color: var(--main-text-colour);
}
.snipcart-cart-header,
.snipcart-discount-box__button,
.snipcart-modal__close {
  display: none;
}
.snipcart-form,
.snipcart-item-line {
  box-shadow: none;
}
.snipcart-layout {
  height: auto !important;
}
.snipcart-modal,
.snipcart-modal__container,
.snipcart-cart__content,
.snipcart__box--gray {
  background-color: transparent;
}
.snipcart-modal__container {
  height: auto !important;
  overflow: visible !important;
  position: relative;
}
.snipcart-payment-methods__title {
  background-color: white;
}
.snipcart-checkout-transitions-enter-active {
  animation: upwardsIn 0.5s ease-out both;
}
.snipcart-checkout-transitions-leave-active {
  animation: upwardsOut 0.1s ease-in both;
}
</style>
