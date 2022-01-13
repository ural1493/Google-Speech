import { Button } from '@mui/material';
import { Link } from './styled/Link';
import { FlexContainer } from './styled/FlexContainter';
import { FC } from 'react';

interface AuthLinkProps {
  to: string;
}

export const AuthLink: FC<AuthLinkProps> = ({ to, children }) => {
  return (
    <FlexContainer>
      <Button>
        <Link to={to}>{children}</Link>
      </Button>
    </FlexContainer>
  );
};
