import styled from 'styled-components/native';
import {
    ActivityIndicator,
    Searchbar,
    Appbar
} from 'react-native-paper';

export const Loading = styled(ActivityIndicator)`
    margin-left: 12px;
    margin-right: 12px;
`;

export const AppbarHeader = styled(Appbar.Header)`
    height: ${({ styledHeight }) => styledHeight}px;
`;

export const AppbarColumn = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const AppbarRow = styled.View`
    display: flex;
    height: ${({ styledHeight }) => styledHeight}px;
    align-items: center;
    flex-direction: row;
`;

export const SearchBar = styled(Searchbar)``;
