<template class="container">
    <div class="vertical-center">
        <div class="d-lg-inline d-md-none d-sm-none d-xs-none d-none logo-container">
            <img src="../assets/Herriman.png" />
        </div>
        <div class="message-container">
            <h3>Hello, [Your Name Goes Here]!</h3>
            <h4>Let's get this party started!</h4>
            <button
                type="button"
                class="btn btn-primary"
                @click="$router.push('build')"
            >
                <b>Instructions</b>
            </button>
        </div>
    </div>
</template>
<style>

.container {
  height: 300px;
  position: relative;
}

.vertical-center {
  margin: 0;
  max-width:680px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding:20px;
  margin:40px;
}

.logo-container {
    float:left;
    padding-right: 20px;
    margin-top:50px;
    border-right:1px solid white;
}

.logo-container img {
    height:200px;
}

.message-container {
    float:right;
    padding-left: 20px;
    padding-top: 60px;
    align-items: center;
    text-align: center;
}
</style>