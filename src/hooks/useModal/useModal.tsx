import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const closeModal = (): void => setIsOpen(false);
  const openModal = (): void => setIsOpen(true);

  return [isOpen, openModal, closeModal];
};

export default useModal;
