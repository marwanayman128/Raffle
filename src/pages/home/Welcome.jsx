import { Box, Stack, Typography } from '@mui/material';
import './css/Welcome.css';
import WelcomeButton from '../../components/buttons/WelcomeButton/WelcomeButton';
import { useTranslation } from 'react-i18next';


export default function Welcome() {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.language === 'ar' ? 'right' : 'left';
    
    return (
        <>

            <Box sx={{
                position: "relative", backgroundImage: theme => theme.palette.
                    // @ts-ignore
                    welcomePage.main,
            }}>
                <img src=".//images/Welcome/Background.png" alt="" width={"100%"} height={"100%"} />
                <Stack position={"absolute"} sx={{ top: '25%', left: '5%', width: '40%', pl: 10 }}>
                    <Typography sx={{ fontSize: "54px", textAlign: textAlignment }}>
                        {t("header.head")}
                        
                    </Typography>
                    <Typography sx={{ fontSize: "20px", textAlign: textAlignment }}>
                        {t("description.describe")}
                    </Typography>
                    <WelcomeButton />
                </Stack>
                <Box sx={{ position: "absolute", top: '3%', right: '31%', width: '9%' }}>
                    <img className='layer1' src=".//images/Welcome/Layer 1.png" alt="" width={"100%"} height={"100%"} />
                </Box>
                <Box sx={{ position: "absolute", top: '23%', right: '37%', width: '9%' }}>
                    <img className='layer2' src=".//images/Welcome/Layer 2.png" alt="" width={"100%"} height={"100%"} />
                </Box>

                <Box sx={{ position: "absolute", top: '6%', right: '7%', width: '7%', rotate: "16deg" }}>
                    <img className='layer3' src=".//images/Welcome/Layer 3.png" alt="" width={"100%"} height={"100%"} />
                </Box>
            </Box>
        </>
    )
}
