import { useMemo } from 'react';
import { SizeOption } from '../../interfaces/product';
import SizeButton from '../SizeButton';
import {
  SelectText,
  SelectedText,
  SelectedWrap,
  SizeButtonList,
} from './styles';

interface SelectSizeProps {
  selectedSize: number;
  sizeOptions: SizeOption[];
  onSelectedSize: (sizeId: number) => void;
}

const SelectSize = ({
  selectedSize,
  sizeOptions,
  onSelectedSize = () => null,
}: SelectSizeProps) => {
  const selectLabel = useMemo(() => {
    return sizeOptions.find((size) => size.id === selectedSize)?.label;
  }, [sizeOptions, selectedSize]);

  return (
    <div>
      <SelectedWrap>
        <SelectText>SIZE</SelectText>
        <SelectedText>{selectedSize === -1 ? '' : selectLabel}</SelectedText>
      </SelectedWrap>
      <SizeButtonList>
        {sizeOptions.map((size) => (
          <div key={size.id}>
            <SizeButton
              selected={size.id === selectedSize}
              onClick={() => onSelectedSize(size.id)}
              label={size.label}
            />
          </div>
        ))}
      </SizeButtonList>
    </div>
  );
};

export default SelectSize;
