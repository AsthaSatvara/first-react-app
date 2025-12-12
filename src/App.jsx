
import NetflixSeries from './components/NetflixSeries.jsx';

import './components/Netflix.css';
import  {BlogDetail} from './components/Blog.jsx';
import MaruName from './components/Post.jsx';
import Music from './components/Music.jsx';

export const App = () => {
  return (
    // [<NetflixSeries key="1" />, <NetflixSeries key="2" />]
    // <Fragment>
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />\
      {/* <Music food="Light food" weight='100'/> */}
      {/* <BlogDetail /> */}
      {/* <MaruName/> */}
    </section>
    // </Fragment>
  );
};



