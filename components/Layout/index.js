import LayoutStyles from '../styles/Layout';
import Router from 'next/router';
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    NProgress.done();
}

Router.onRouteChangeError = () => {
    NProgress.done();
}

const Layout = ({ children }) => {
    return (
        <LayoutStyles>
            {children}
        </LayoutStyles>
    );
};

export default Layout;