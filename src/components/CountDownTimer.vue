<template>
  <div class="timer">
    <div class="day">
      <div class="format">{{ wordString.day }}</div>
      <span class="number">{{ days }}</span>
       </div>
 
    <div class="hour">
      <div class="format">{{ wordString.hours }}</div>
      <span class="number">{{ hours }}</span>
             <!-- <span class="separador_timer"> : </span> -->
    </div>
   
    <div class="min">
      <div class="format">{{ wordString.minutes }}</div>
      <span class="number">{{ minutes }}</span>
            <!-- <span class="separador_timer"> : </span> -->
    </div>
 
    <div class="sec">
      <div class="format">{{ wordString.seconds }}</div>
      <span class="number">{{ seconds }}</span>
    </div>
    <!-- <div class="message">{{ message }}</div>
      <div class="status-tag" :class="statusType">{{ statusText }}</div> -->
  </div>
</template>


<script>
export default {
  props: ["starttime", "endtime", "trans"],
  data: function () {
    return {
      timer: "",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: "",
      statusText: "",
    };
  },
  created: function () {
    this.wordString = JSON.parse(this.trans);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function (start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
  },
};
</script>
 
<style lang="scss" scoped >
.timer {
  font-size: 20px;
  color: #2a3b47;
  text-align: center;
  margin-top: 0 ;
 display: flex;
 flex-direction: row;
  width:min-content;

  .day,
  .hour,
  .min,
  .sec {
    font-size: 1.5rem;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    margin: 0 0.1rem;
    .format {
      font-weight: 600;
      font-size: 0.8rem;
      //@include margin-start(5);
      //display: inline-block;
      color:var(--grey);
      width: 3rem;
    }
  }
  .number {
    padding: 0 5px;
    border-radius: 5px;
    display: inline-block;
    width: 3rem;
    text-align: center;
    font-weight: 600;
  }
  .separador_timer {
   font-weight: 900;
 
  }
  // .message {
  //   font-size: 14px;
  //   font-weight: 400;
  //   margin-top: 5px;
  // }
  // .status-tag {
  //   width: 270px;
  //   margin: 10px auto;
  //   padding: 8px 0;
  //   font-weight: 500;
  //   color: #000;
  //   text-align: center;
  //   border-radius: 15px;
  //   &.upcoming {
  //     background-color: lightGreen;
  //   }
  //   &.running {
  //     background-color: gold;
  //   }
  //   &.expired {
  //     background-color: silver;
  //   }
  // }
}
</style>