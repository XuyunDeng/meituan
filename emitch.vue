<template>
</template>

<script>
    export default{
        name:'emitch',
        props:['senddata'],
        data(){
            
        },
        methods:{
            select(){
                let data{
                    city:'hangzhou'
                }
                this.$emit('update',data)
            }
        }
    }
</script>