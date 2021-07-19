import React from 'react';
import * as S from './styles';
import { Text } from 'react-native'
import { RectButtonProperties, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';



interface EnviromentButtonProps extends RectButtonProperties {
    title: string;
    active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({ title, active = false, ...rest }: EnviromentButtonProps) => {
    return (
        <S.Container isActive={active}{...rest}>
            <S.ButtonText isActive={active}>{title}</S.ButtonText>
        </S.Container>
    )
};

export default EnviromentButton;