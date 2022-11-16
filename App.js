import React, {useEffect, useRef, useState} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Block,
  Button,
  TextArea,
  SaveArea,
  StyledScrollView,
} from './src/components/index';
import {decodeMorse} from './src/helpers/morseDecoder';

const App: () => Node = () => {
  const [symbol, setSymbol] = useState('');
  const [string, setString] = useState('');
  const [opacity, setOpacity] = useState(1);
  const acceptTimer = 120;
  let acceptInterval = useRef(null);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [ms, setMs] = useState(0);

  const morseDecoderHandler = () => {
    setOpacity(0.2);
    clearInterval(acceptInterval.current);
    setMs(Date.now());
  };

  const confirmInputHandler = () => {
    setOpacity(1);
    console.log(Date.now() - ms);
    if (Date.now() - ms > acceptTimer) {
      setSymbol(prev => prev + '-');
      setMs(0);
    } else {
      setSymbol(prev => prev + '.');
      setMs(0);
    }
  };
  useEffect(() => {
    if (symbol.length) {
      if (symbol.length < 6) {
        acceptInterval.current = setInterval(() => {
          setString(prevState => prevState + decodeMorse(symbol));
          setSymbol('');
          clearInterval(acceptInterval.current);
        }, acceptTimer * 5);
      } else {
        setString(prevState => prevState + decodeMorse(symbol));
        setSymbol('');
        clearInterval(acceptInterval.current);
      }
    } else {
      if (symbol.length === 0 && string.length && string.slice(-1) !== ' ') {
        acceptInterval.current = setInterval(() => {
          setString(prevState => prevState + ' ');
          clearInterval(acceptInterval.current);
        }, acceptTimer * 10);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  const clearText = () => {
    setString('');
  };

  const showAnimation = () => {
    return;
  };
  return (
    <SaveArea
      flex={1}
      pt={'10px'}
      pl={'10px'}
      pr={'10px'}
      bg={'#ddd'}
      pb={'20px'}>
      <Block flex={1} justifyContent={'center'} alignItems={'center'}>
        <Block
          flex={1}
          pt={'10px'}
          pb={'10px'}
          pl={'10px'}
          pr={'10px'}
          bg={'#eee'}
          width={'100%'}
          borderWidth={'1px'}
          borderColor={'#111'}
          borderRadius={'5px'}>
          <StyledScrollView flex={1} width={'100%'} height={'100%'}>
            <TextArea>{string.toUpperCase()}</TextArea>
          </StyledScrollView>
        </Block>
        <TextArea fontSize={'14px'}>
          Unrecognized character is displayed as *
        </TextArea>
        <Block
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          pr={'20px'}
          pl={'20px'}>
          <Button onPress={clearText} mt={'10px'}>
            <Block
              shadowColor={'#333333'}
              shadowRadius={12}
              shadowOpacity={0.05}
              bg={'#EE2323'}
              borderRadius={'20px'}
              height={'30px'}
              width={'100px'}
              justifyContent={'center'}
              alignItems={'center'}
              borderWidth={'1px'}
              borderColor={'#111'}>
              <TextArea color={'#000'}>Clear</TextArea>
            </Block>
          </Button>
        </Block>
        <Block
          mt={'10px'}
          pt={'5px'}
          pb={'5px'}
          pl={'10px'}
          pr={'10px'}
          bg={'#eee'}
          width={'50%'}
          borderWidth={'1px'}
          borderColor={'#111'}
          borderRadius={'5px'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'50px'}>
          <TextArea fontSize={'25px'}>{symbol}</TextArea>
        </Block>
        <Block
          flexDirection={'row'}
          justifyContent={'space-around'}
          width={'100%'}>
          <Button
            onPressIn={morseDecoderHandler}
            onPressOut={confirmInputHandler}
            onPress={showAnimation}
            opacity={opacity}
            mt={'10px'}>
            <Block
              shadowColor={'#333333'}
              shadowRadius={12}
              shadowOpacity={0.05}
              bg={'#60B504'}
              borderRadius={'50px'}
              height={'100px'}
              width={'100px'}
              justifyContent={'center'}
              alignItems={'center'}
              borderWidth={'1px'}
              borderColor={'#111'}>
              <TextArea color={'#000'}>Enter code</TextArea>
            </Block>
          </Button>
        </Block>
      </Block>
    </SaveArea>
  );
};

export default App;
