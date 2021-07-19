import React from 'react';
import * as S from './styles';
import { Text } from 'react-native'
import { RectButtonProperties, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';



interface ButtonProps extends RectButtonProperties {
    title?: string;
    iconName?: string | undefined;
    iconSize?: number;
    iconColor?: string;
    width?: number;
    height?: number;
}

const Button: React.FC<ButtonProps> = ({ title, iconName, iconColor, iconSize, width, height, ...rest }: ButtonProps) => {
    return (
        <S.Container style={{ width: width ?? 231, height: height ?? 56 }} {...rest}>
            <S.Icon name={iconName ?? undefined} color={iconColor ?? undefined} size={iconSize ?? undefined} />
            <S.ButtonText style={{ color: colors.white, fontSize: 24 }}>
                {title}
            </S.ButtonText>
        </S.Container>
    )
};

export default Button;