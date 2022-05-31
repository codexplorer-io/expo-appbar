import React from 'react';
import {
    Appbar as DefaultAppbar,
    useTheme
} from 'react-native-paper';
import { Loading } from './styled';

let isStatusBarTranslucent = true;
export const setIsStatusBarTranslucent = isTranslucent => {
    isStatusBarTranslucent = isTranslucent;
};

export const Appbar = ({ ...props }) => (
    <DefaultAppbar.Header
        {...(isStatusBarTranslucent ? {} : { statusBarHeight: 0 })}
        {...props}
    />
);

export const AppbarContent = ({ ...props }) => {
    const { colors: { onPrimary } } = useTheme();

    return (
        <DefaultAppbar.Content
            color={onPrimary}
            {...props}
        />
    );
};

export const AppbarAction = ({ ...props }) => {
    const { colors: { onPrimary } } = useTheme();

    return (
        <DefaultAppbar.Action
            color={onPrimary}
            {...props}
        />
    );
};

export const AppbarBackAction = ({ ...props }) => {
    const { colors: { onPrimary } } = useTheme();

    return (
        <DefaultAppbar.BackAction
            color={onPrimary}
            {...props}
        />
    );
};

export const AppbarLoading = ({ color }) => {
    const { colors: { onPrimary } } = useTheme();

    return (
        <Loading
            animating
            color={color ?? onPrimary}
        />
    );
};
