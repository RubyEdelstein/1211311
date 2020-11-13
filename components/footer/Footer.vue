<template>
  <footer>
      <div class="footer">
        <a 
            href="https://etherscan.io/address/0xC4011ad1080C9f7543F8d84583Fb53035A4a24BA" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Farm Contract
        </a>
        <a 
            href="https://t.me/playeathereum" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Telegram
        </a>
        <a 
            href="https://twitter.com/rubyedelstein" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Twitter
        </a>
        <a 
            href="https://github.com/Eathereum" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Github
        </a>
      </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style scoped> 
    .footer {
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .footer a {
        color: #8e9297;
        margin: 0px 12px;
        font-size: 14px;
        transition: 0.1s;
    }
    .footer a:hover {
        color: #fff;
    }
</style>