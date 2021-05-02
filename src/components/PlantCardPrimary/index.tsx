import React from 'react';
import * as S from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'



interface PlantProps extends RectButtonProperties {
    data: {
        name: string;
        photo: string;
    }
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }: PlantProps) => {
    return (
        <S.Container {...rest}>
            <SvgFromUri
                uri={data.photo}
                width={70}
                height={70}
            />
            <S.CardText>{data.name}</S.CardText>
        </S.Container>
    )
};

export default PlantCardPrimary;