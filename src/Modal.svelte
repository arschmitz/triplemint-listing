<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function close () {
    dispatch('close')
  }
</script>
<style>
  .modal {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    width: 100%;
    height: auto;
    background-color: rgba(0,0,0,0.4);
    display: block;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 210;
    position: relative;
    position: fixed;
    top: 104px;
    bottom: 0;
  }

  .close-modal {
    width: 100%;
    height: 40px;
    background-color: #404040;
    margin: 0 auto;
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    position: fixed
  }

  .close-icon {
    height: 13px;
    width: 13px;
    vertical-align: middle;
    margin-left: 10px;
  }

  .modal-body {
    width: 50%;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #fff;
    z-index: 11;
  }
</style>

<div class="modal">
  <div on:click={close} class="close-modal">Close <img class="close-icon" src="https://static.triplemint.com/jupiter/a9f7f1f974cf4e7690ddf77c6308317a3ccd70c1/static/images/close-white.svg"></div>
  <div class="modal-body">
    <slot></slot>
  </div>
</div>