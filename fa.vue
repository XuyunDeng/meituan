<template>
    
</template>
<script>
    var app = new Vue({
        el="#app",
        data:{
            message:"hello",
        },
        methods:{
            update(data){
                console.log(data)
                this.msg = data.city
            }
        }
    })
</script>
<style>
    .test {
        color: red;
        font-size: ;
    }

</style>