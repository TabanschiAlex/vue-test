const app = {
    data() {
        return {
            username: 'Alex',
            userDate: undefined,
            inputDate: undefined,
            currentDate: new Date().getFullYear()
        }
    },
    computed: {
        calculateAge() {
            return this.currentDate - this.userDate;
        }
    },
    watch: {
        inputDate(value) {
            console.log(value)
            this.userDate = new Date(value).getFullYear();
        }
    }
}

Vue.createApp(app).mount('#container');
