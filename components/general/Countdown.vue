<template>
    <div v-if="seconds" class="countdown">
        <p>{{seconds}}</p>
        <div>:</div>
        <p>{{minutes}}</p>
        <div>:</div>
        <p>{{hours}}</p>
        <div>:</div>
        <p>{{days}}</p>
    </div>
</template>

<script>
import moment from 'moment'
import { formatTime } from '../../assets/services/numbers'
export default {
    props: {
        endTime: String,
        startTime: {type: String, required: false}
    },
    data() {
        return {
            seconds: '',
            minutes: '',
            hours: '',
            days: ''
        }
    },
    created() {
        const { endTime } = this.$props
        const startTime = this.$props.startTime ? this.$props.startTime : moment().toDate()
        let eventTime = moment(endTime).unix()
        let currentTime = moment(startTime).unix()
        let diffTime = eventTime - currentTime;
        let duration = moment.duration(diffTime * 1000, 'milliseconds')
        let interval = 1000
        duration = moment.duration(duration - interval, 'milliseconds')
        this.setTime(duration)
        setInterval(() => {
            duration = moment.duration(duration - interval, 'milliseconds')
            this.setTime(duration)
        }, interval)
    },
    methods: {
        setTime(duration) {
            const seconds = duration.seconds()
            const minutes = duration.minutes()
            const hours = duration.hours()
            const days = duration.days()
            this.seconds = formatTime(seconds)
            this.minutes = formatTime(minutes)
            this.hours = formatTime(hours)
            this.days = formatTime(days)
        }
    }
}
</script>

<style scoped>
.countdown {
    display: flex; 
    flex-direction: row-reverse;
    justify-content: space-between;
}
.countdown p {
    font-family: 'Orbitron';
    width: 30px;
    height: fit-content !important;
    min-height: 10px !important;
}
</style>