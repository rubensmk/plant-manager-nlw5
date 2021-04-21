import React from 'react';
import * as S from './styles';
import { Text, TouchableOpacityProps } from 'react-native'
import colors from '../../styles/colors';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }: ButtonProps) => {
    return (

        <S.Button >
            <Text style={{ color: colors.white, fontSize: 24 }}>
                {title}
            </Text>
        </S.Button>
    )
};

export default Button;