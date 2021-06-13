import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

this.state = {
  date: date
};
  return <Component {...pageProps,this.state} />
}

export default MyApp
