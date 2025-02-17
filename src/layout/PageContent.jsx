import Footer from "./Footer";
import Header from "./Header";
import PropTypes from 'prop-types';


export default function PageContent({ children }) {
  return (
    <>
    <Header/>
    <div className="page-content">
      {children}
    </div>
    <Footer/>
    </>
  )
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
}; 