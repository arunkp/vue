const DadJokes = {
  data() {
    return {
      joke: "",
      url: "https://icanhazdadjoke.com/",
    };
  },
  computed: {
    getColor() {
      return this.toRGB(this.joke);
    },
  },
  template: `
        <div class="joke-wrapper" :style="{borderColor:getColor}">
            <img class="smile" src="../09/smile.svg" >
            {{joke}}
            <a href="#" class="refresh" @click.prevent="refreshJoke"></a>
        </div>
    `,
  methods: {
    toRGB(str) {
      var hash = 0;
      if (str.length === 0) return hash;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }
      var rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        rgb[i] = value;
      }
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    },
    refreshJoke() {
      axios
        .get(this.url, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          this.joke = response.data.joke;
        });
    },
  },
  mounted() {
    this.refreshJoke();
  },
};
