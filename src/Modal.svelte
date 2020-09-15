<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function close () {
    dispatch('close')
  }
</script>
<style>
  .modal {
    -webkit-overflow-scrolling: touch;
    background-color: rgba(0,0,0,0.4);
    bottom: 0;
    overflow-y: auto;
    position: fixed;
    top: 6.5rem;
    width: 100%;
    z-index: 210;
  }

  .close-modal {
    background-color: var(--dark-grey);
    color: var(--white);
    cursor: pointer;
    line-height: 2.5rem;
    position: fixed;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  .close-icon {
    height: 0.8125rem;
    margin-left: 0.625rem;
    vertical-align: middle;
    width: 0.8125rem;
  }

  .modal-body {
    background-color: var(--white);
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  @media screen and (min-width: 61rem) {
    .modal-body {
      width: 50%;
    }
  }
</style>

<div class="modal">
  <div on:click={close} class="close-modal">Close <img class="close-icon" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/close-white.svg" alt=""></div>
  <div class="modal-body">
    <slot></slot>
  </div>
</div>