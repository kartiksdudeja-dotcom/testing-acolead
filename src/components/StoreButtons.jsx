import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as AppStoreSVG } from '../assets/images/AppStoreButtonIcon.svg';
import { ReactComponent as PlayStoreSVG } from '../assets/images/PlayStoreButtonIcon.svg';
import { memo } from 'react';

const StoreButton = styled(Button, {
    shouldForwardProp: (prop) => ![].includes(prop),
})(({ theme }) => ({
    padding: 0,
    minWidth: 0,
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: theme.shadows[4],
    },
    '&:active': {
        transform: 'scale(0.98)',
    },
    '& .MuiButton-startIcon': {
        margin: 0,
    },
    '& svg': {
        display: 'block',
        height: '40px',
    },
    '@media (max-width: 600px)': {
        '& svg': {
            height: '38px',
        },
    },
    '@media (max-width: 400px)': {
        '& svg': {
            height: '35px',
        },
    },
}));

export const APP_STORE_LINK = 'https://apps.apple.com/us/app/acolead/id6745178472';
export const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.acolead';

export const AppStoreButton = memo(({ onClick, ...props }) => {
    const handleClick = (event) => {
        window.open(APP_STORE_LINK, '_blank', 'noopener noreferrer');
        if (onClick) onClick(event);
    };

    return (
        <StoreButton
            {...props}
            onClick={handleClick}
            aria-label="Download on the App Store"
        >
            <AppStoreSVG />
        </StoreButton>
    );
});

export const PlayStoreButton = memo(({ onClick, ...props }) => {
    const handleClick = (event) => {
        window.open(PLAY_STORE_LINK, '_blank', 'noopener noreferrer');
        if (onClick) onClick(event);
    };

    return (
        <StoreButton
            {...props}
            onClick={handleClick}
            aria-label="Get it on Google Play"
        >
            <PlayStoreSVG />
        </StoreButton>
    );
});
