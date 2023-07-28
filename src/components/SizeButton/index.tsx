import { ButtonWrap } from './styles';

interface SizeButtonProps {
  onClick?: () => void;
  label: string;
  selected: boolean;
}

const SizeButton = ({
  onClick = () => null,
  label = '',
  selected = false,
}: SizeButtonProps) => {
  return (
    <ButtonWrap onClick={onClick} selected={selected}>
      {label}
    </ButtonWrap>
  );
};

export default SizeButton;
