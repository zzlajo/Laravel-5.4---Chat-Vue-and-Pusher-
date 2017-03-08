
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.config.devtools = true;

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data: {
       messages: [
           // {
           //     message: "This is some a new message",
           //     user: "John Doo"
           // },
           // {
           //     message: "This is some a new message222",
           //     user: "John Doo"
           // }
       ],
        usersInRoom: []
    },
    ready: function () {
        this.created();
    },
    methods: {
        addMessage(message) {
            this.messages.push(message);
            // console.log('message added');
            axios.post('/messages', message).then(response => {
                // 33
            });

        },

    },
    created() {
        axios.get('/messages').then(response => {
            this.messages = response.data;
            // console.log(response);
        });


        // Echo.private('chatroom')
        Echo.join('chatroom')
        // Echo.channel('chatroom')
        .here((users) => {
            this.usersInRoom = users;
        })
        .joining((user) => {
            this.usersInRoom.push(user)
        })
        .leaving((user) => {
            this.usersInRoom = this.usersInRoom.filter(u => u != user);
        })
        .listen('MessagePosted', (e) => {
            this.messages.push({
                message: e.message.message,
                user: e.user,
            });
        });


    }
});
