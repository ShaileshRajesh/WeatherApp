import {create} from 'zustand';

type ButtonInfo = {
  primaryButtonName?: string;
  primaryButtonColor?: string;
  secondaryButtonName?: string;
  secondaryButtonColor?: string;
};

type ModalState = {
  showModal: boolean;
  iconName: string;
  message: string;
  buttonInfo: ButtonInfo;
};

type UiStore = {
  modal: ModalState;
  setModal: (modal: Partial<ModalState>) => void;
  hideModal: () => void;
};

const initialModalState: ModalState = {
  showModal: false,
  iconName: '',
  message: '',
  buttonInfo: {
    primaryButtonName: '',
    primaryButtonColor: '',
    secondaryButtonName: '',
    secondaryButtonColor: '',
  },
};

export const useUiStore = create<UiStore>(set => ({
  modal: initialModalState,
  setModal: modal =>
    set(state => ({
      modal: {
        ...state.modal,
        ...modal,
        showModal: true,
      },
    })),
  hideModal: () =>
    set({
      modal: initialModalState,
    }),
}));
