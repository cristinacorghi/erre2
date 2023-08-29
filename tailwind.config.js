/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'green-light': '#86E760',
      'green-light-2': '#76E44B',
      'green-light-3': '#67E137',
      'green-light-4': '#57DE23',
      'green-mid-1': '#4FCB1F',
      'green-mid-2': '#47B61C',
      'green-mid-4': '#378E15',
      'green-dark-1': '#23590D',
      'green-dark-2': '#112C07',
      'grey-1': '#CCCCCC',
      'grey-2': '#B3B3B3',
      'grey-3': '#808080',
      'grey-900': '#101828',
      'black': '#000000',
      'white': '#FFFFFF',
      'gradient-light-first': '#86E760',
      'gradient-light-last': '#57DE23',
      'gradient-mid-first': '#4FCB1F',
      'gradient-mid-last': '#378E15',
      'gradient-dark-first': '#378E15',
      'gradient-dark-last': '#112C07'
    },
    fontFamily: {
      title: ['"Inter-Bold"'],
      medium: ['"Inter-Medium"'],
      paragraph: ['"Inter-Regular"']
    },
    fontSize: {
      h1: '61px',
      h2: '49px',
      h3: '39px',
      h4: '31px',
      p1: '25px',
      p2: '20px',
      p3: '16px',
      t1: '13px',
      t2: '10px'
    },
    boxShadow: {
      'button': '0px 3px 6px 0px rgba(0, 0, 0, 0.16)'
    },
  },
  plugins: [],
}

