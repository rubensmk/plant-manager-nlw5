import React from 'react';
import * as S from './styles';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import Swiapeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg'
import { Animated, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

interface PlantProps extends RectButtonProperties {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

const PlantCardSecundary: React.FC<PlantProps> = ({ data, handleRemove, ...rest }: PlantProps) => {
    return (
        <Swiapeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <S.RemoveButton
                            onPress={handleRemove}
                        >
                            <Feather name='trash' size={32} color={colors.white} />
                        </S.RemoveButton>
                    </View>
                </Animated.View>
            )}
        >
            <S.Container {...rest}>
                <SvgFromUri
                    uri={data.photo}
                    width={50}
                    height={50}
                />
                <S.CardTitle>{data.name}</S.CardTitle>
                <S.Details>
                    <S.TimeLabel>
                        Regar às
                </S.TimeLabel>
                    <S.Time>
                        {data.hour}
                    </S.Time>
                </S.Details>
            </S.Container>
        </Swiapeable>

    )
};

export default PlantCardSecundary;