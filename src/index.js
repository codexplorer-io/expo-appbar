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
import {
    Loading,
    SearchBar,
    AppbarHeader,
    AppbarColumn,
    AppbarRow
} from './styled';

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

const APPBAR_HEIGHT = 50;
const APPBAR_PADDING_BOTTOM = 6;
const SEARCH_HEIGHT = 54;

export const Appbar = ({
    children,
    hasSearchBar,
    searchText,
    onSearchTextChange,
    ...props
}) => {
    const isStatusBarTranslucent = useIsStatusBarTranslucent();
    const appbarHeight = APPBAR_HEIGHT + APPBAR_PADDING_BOTTOM + (hasSearchBar ? SEARCH_HEIGHT : 0);

    return (
        <AppbarHeader
            {...(isStatusBarTranslucent ? {} : { statusBarHeight: 0 })}
            styledHeight={appbarHeight}
            {...props}
        >
            <AppbarColumn>
                <AppbarRow styledHeight={APPBAR_HEIGHT}>
                    {children}
                </AppbarRow>
                {hasSearchBar && (
                    <AppbarRow styledHeight={SEARCH_HEIGHT}>
                        <SearchBar
                            placeholder='Search'
                            onChangeText={onSearchTextChange}
                            value={searchText}
                        />
                    </AppbarRow>
                )}
            </AppbarColumn>
        </AppbarHeader>
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
