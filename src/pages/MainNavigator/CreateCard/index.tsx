import * as React from 'react';
import {Controller} from 'react-hook-form';
import {Div, Screen} from '~/components/Atomics';
import {
  AppBackground,
  Header,
  HeaderIcon,
  FormInput,
  Button,
} from '~/components';
import {useCreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.model';

export const CreateCard = () => {
  const {goBack, control, handleSubmit, errors, onSubmit, trigger, isValid} =
    useCreateCard();
  return (
    <AppBackground>
      <Header.Root variant="clean">
        <Header.Action
          onPress={goBack}
          icon={<HeaderIcon variant="arrow-back-sharp" />}
        />
        <Header.Content variant="clean" text="cadastro" />
      </Header.Root>
      <Screen bg="transparent" pb={9}>
        <Div flex={1} justifyContent="center" pb={9}>
          <Div mx={3}>
            <Controller
              control={control}
              name="cardNumber"
              defaultValue=""
              render={({field: {onChange, onBlur, value, name}}) => (
                <FormInput
                  placeholder="•••• •••• •••• ••••"
                  {...{onChange, onBlur, value, name, trigger, errors}}
                />
              )}
            />
            <Controller
              control={control}
              name="name"
              defaultValue=""
              render={({field: {onChange, onBlur, value, name}}) => (
                <FormInput
                  placeholder="Ex: Vanesso Pudinick"
                  {...{onChange, onBlur, value, name, trigger, errors}}
                />
              )}
            />
          </Div>
          <Div flexDirection="row" justifyContent="space-between" mx={3}>
            <Div flex={1}>
              <Controller
                control={control}
                name="validity"
                defaultValue=""
                render={({field: {onChange, onBlur, value, name}}) => (
                  <FormInput
                    placeholder="00/00"
                    {...{onChange, onBlur, value, name, trigger, errors}}
                  />
                )}
              />
            </Div>
            <Div mx={2} />
            <Div flex={1}>
              <Controller
                control={control}
                name="cvv"
                defaultValue=""
                render={({field: {onChange, onBlur, value, name}}) => (
                  <FormInput
                    placeholder="•••"
                    {...{onChange, onBlur, value, name, trigger, errors}}
                  />
                )}
              />
            </Div>
          </Div>
          <Button
            mx={3}
            onPress={handleSubmit(onSubmit)}
            variant={isValid ? 'primary' : 'disable'}
            keyLabel="Next"
          />
        </Div>
      </Screen>
    </AppBackground>
  );
};
