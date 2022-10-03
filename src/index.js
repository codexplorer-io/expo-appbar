import React from 'react';
import {
    createStore,
    createActionsHook,
    createStateHook
} from 'react-sweet-state';
import {
    Appbar as DefaultAppbar,
    useTheme
} from 'react-native-paper';
import { Loading } from './styled';

const Store = createStore({
    initialState: {
        isStatusBarTranslucent: true
    },
    actions: {
        setIsStatusBarTranslucent: isStatusBarTranslucent => ({ setState }) => {
            setState({ isStatusBarTranslucent });
        }
    },
    name: 'ExpoAppBarStore'
});

const useActions = createActionsHook(Store);

const useIsStatusBarTranslucent = createStateHook(Store, {
    selector: ({ isStatusBarTranslucent }) => isStatusBarTranslucent
});

export const useSetIsStatusBarTranslucent = () => useActions().setIsStatusBarTranslucent;

export const Appbar = ({ ...props }) => {
    const isStatusBarTranslucent = useIsStatusBarTranslucent();

    return (
        <DefaultAppbar.Header
            {...(isStatusBarTranslucent ? {} : { statusBarHeight: 0 })}
            {...props}
        />
    );
};

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
