import { MainRoutes } from '../../constants/MainRouters';
import { Button } from '@mui/material';
import { Link } from './styled/Link';
import { FlexContainer } from './styled/FlexContainter';
import { FC } from 'react';

export const RegistrateLink: FC = ({ children }) => {
  return (
    <FlexContainer>
      <Button>
        <Link to={MainRoutes.Register}>{children}</Link>
      </Button>
    </FlexContainer>
  );
};
