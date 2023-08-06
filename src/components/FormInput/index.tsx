import * as React from 'react';
import {Div, Input} from '~/components/Atomics';
import {IFormInput} from '~/components/FormInput/FormInput.types';
import {defineLabel, defineMask} from '~/utils';
import S from '~/components/FormInput/FormInput.styles';

export const FormInput = ({
  placeholder,
  onChange,
  value,
  onBlur,
  trigger,
  name,
  errors,
  ...rest
}: IFormInput.IView) => (
  <Div {...rest} mb={3} testID={`FormInput`}>
    <S.Label color="white">{defineLabel(name)}</S.Label>
    <S.Content borderColor={errors?.[name]?.message ? 'red' : 'transparent'}>
      <Input
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        mask={defineMask(name)}
        onChangeText={(text: string) => {
          onChange(text);
          trigger(name);
        }}
      />
    </S.Content>
    {errors?.[name]?.message && (
      <S.Label mt={1} color="red">
        {
          <S.Label mt={1} color="red">
            {errors?.[name]?.message}
          </S.Label>
        }
      </S.Label>
    )}
  </Div>
);
