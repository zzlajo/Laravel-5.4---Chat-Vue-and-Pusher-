<template lang="html">

    <div class="chat-message">
        <p>{{ message.message }}</p>
        <small>{{ message.user.name }}</small>
    </div>

</template>

<script>
    export default {
        props: ['message']
//        data() {
//            return {
//                message: "This is some a new message",
//                user: "John Doo",
//            }
//        }

    }
</script>

<style lang="css">

</style>