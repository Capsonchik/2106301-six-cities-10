import { Navigate } from 'react-router-dom';
import { AutorizationStatus } from '../../consts';

type PrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({autorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return(
    autorizationStatus === AutorizationStatus.Auth ? children : <Navigate to='/login'/>
  );
}

export default PrivateRoute;
