import * as React from 'react';
import {Div} from '~/components/Atomics';
import {ICard} from '~/components/Card/Card.types';
import S from '~/components/Card/Card.styles';

export const Card = ({type, name, cardNumber, validity}: ICard.IView) => (
  <S.Container testID={`Card`}>
    <Div mb={4}>
      <S.Label testID={`Card:Label`}>{type}</S.Label>
    </Div>
    <Div>
      <S.Name testID={`Card:Name`}>{name}</S.Name>
      <S.CardNumber
        testID={`Card:CardNumber`}
      >{`•••• •••• •••• ${cardNumber?.slice(-4)}`}</S.CardNumber>
      <S.Validate testID={`Card:Validate`}>{`Validade ${validity}`}</S.Validate>
    </Div>
  </S.Container>
);
