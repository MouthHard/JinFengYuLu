import { defineComponent, h } from "vue";

const MoreIcon_Common = defineComponent({
  name: "MoreIcon_Common",
  props: {
    width: {
      type: String,
      default: "2em",
    },
    height: {
      type: String,
      default: "2em",
    },
    viewBox: {
      type: String,
      default: "0 0 512 512",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z",
        }),
      ],
    );
  },
});

const PlayIcon_Common = defineComponent({
  name: "PlayIcon_Common",
  props: {
    width: {
      type: String,
      default: "1.5em",
    },
    height: {
      type: String,
      default: "1.5em",
    },
    viewBox: {
      type: String,
      default: "0 0 512 512",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M234.518 388.333v45.972l-110.635-63.88V242.653l39.794 22.966c-14.135 54.515 12.719 107.317 70.841 122.715M373.264 194.01V66.24L262.61 2.355v127.77zm-123.878-63.885V2.355L138.735 66.24v127.77zm151.96 112.527v127.77L512 434.307v-127.77zm-124.097 145.71v45.937l110.872-63.884V242.649l-39.813 23c15.7 55.241-11.772 105.898-71.059 122.712m-166.598-17.94v-127.77L0 306.537v127.77zm216.189-141.96l39.806-22.994l-110.652-63.886l-110.649 63.883l39.809 22.97c38.444-40.568 100.251-41.979 141.686.026M6.612 445.76l110.65 63.885l110.654-63.885l-110.653-63.886zm277.471 0l110.652 63.885l110.652-63.885l-110.652-63.886zm43.437-151.62c0-54.851-59.788-89.32-107.36-61.894s-47.573 96.363 0 123.789s107.36-7.043 107.36-61.894",
        }),
      ],
    );
  },
});

const LikeIcon_Boke = defineComponent({
  name: "LikeIcon_Boke",
  props: {
    width: {
      type: String,
      default: "1.5em",
    },
    height: {
      type: String,
      default: "1.5em",
    },
    viewBox: {
      type: String,
      default: "0 0 32 32",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M15 4v16.563L9.719 15.28L8.28 16.72l7 7l.719.687l.719-.687l7-7l-1.438-1.438l-5.28 5.28V4zM7 26v2h18v-2z",
        }),
      ],
    );
  },
});

const PlayIcon_Control = defineComponent({
  name: "PlayIcon_Control",
  props: {
    width: {
      type: String,
      default: "1.5em",
    },
    height: {
      type: String,
      default: "1.5em",
    },
    viewBox: {
      type: String,
      default: "0 0 256 256",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8",
        }),
      ],
    );
  },
});

const ThreeDotIcon_Common = defineComponent({
  name: "ThreeDotIcon_Common",
  props: {
    width: {
      type: String,
      default: "1.5em",
    },
    height: {
      type: String,
      default: "1.5em",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2",
        }),
      ],
    );
  },
});

const PlayIcon_Boke = defineComponent({
  name: "PlayIcon_Boke",
  props: {
    width: {
      type: String,
      default: "2rem",
    },
    height: {
      type: String,
      default: "2rem",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z",
        }),
      ],
    );
  },
});

const FivePlayBtnIcon = defineComponent({
  name: "FivePlayBtnIcon",
  props: {
    width: {
      type: String,
      default: "1.5em",
    },
    height: {
      type: String,
      default: "1.5em",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.width,
        height: this.height,
        viewBox: this.viewBox,
        fill: this.fill,
      },
      [
        h("path", {
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882",
        }),
      ],
    );
  },
});

export {
  MoreIcon_Common,
  PlayIcon_Common,
  LikeIcon_Boke,
  PlayIcon_Control,
  ThreeDotIcon_Common,
  PlayIcon_Boke,
  FivePlayBtnIcon,
};
