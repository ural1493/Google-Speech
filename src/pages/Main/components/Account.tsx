import { FC, useState } from 'react';
import { Modal, Typography } from '@mui/material';
import { Button } from '../../../core/components/Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../../core/firebase/';
import { useTypedSelector } from '../../../core/hooks/typedReduxHooks';
import { selectEmail } from '../../../core/redux/selectors/user';
import { useTranslation } from 'react-i18next';
import { AccountContainer } from './AccountContainer';
import { ModalContainer } from '../../../core/components/ComfirmModalContainer/ComfirmModalContainer';
import { ButtonContainer } from './ButtonContainer';

export const Account: FC = () => {
  const { t } = useTranslation();
  const email = useTypedSelector(selectEmail);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <AccountContainer>
      <Typography>{email}</Typography>
      <Button onClick={handleOpenModal}>{t('logout')}</Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalContainer>
          <Typography>{t('comfirmLogout')}</Typography>
          <ButtonContainer>
            <Button onClick={handleLogout}>{t('yes')}</Button>
            <Button onClick={handleCloseModal}>{t('no')}</Button>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </AccountContainer>
  );
};
