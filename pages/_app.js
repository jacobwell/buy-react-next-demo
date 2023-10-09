import '../public/amazon.css';
import { Analytics } from '@vercel/analytics/react';

//import 'font-awesome/css/font-awesome.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
