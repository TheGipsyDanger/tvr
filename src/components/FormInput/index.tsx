import * as React from 'react';
import {Div, Text, Input} from '~/components/Atomics';
import {IFormInput} from '~/components/FormInput/FormInput.types';

export const FormInput = ({
  label = 'input',
  placeholder,
  onChange,
  value,
  onBlur,
  trigger,
  name,
}: IFormInput.IView) => (
  <Div testID={`FormInput`}>
    <Text variant="p:small:regular" color="grey" mb={2}>
      {label}
    </Text>
    <Div
      height={55}
      px={3}
      justifyContent="center"
      bg="white"
      radius="input"
      boxShadow="input"
    >
      <Input
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChangeText={(text: string) => {
          onChange(text);
          trigger(name);
        }}
      />
    </Div>
  </Div>
);
