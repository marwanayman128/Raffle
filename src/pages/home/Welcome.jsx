import { Box, Stack, Typography } from '@mui/material';
import './css/Welcome.css';
import WelcomeButton from '../../components/buttons/WelcomeButton/WelcomeButton';
import { useTranslation } from 'react-i18next';
import ScrollFadeIn from '../../components/scroll/scrollAnimation/scrollAnimation';


export default function Welcome() {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.language === 'ar' ? 'right' : 'left';
    
    return (
        <>

            <Stack mb={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} sx={{

                position: "relative", backgroundImage: theme => theme.palette.
                    // @ts-ignore
                    welcomePage.main,
            }}>
                <img src=".//images/Welcome/Background.png" alt="" width={"100%"} height={"100%"} />
                
                <Stack position={"absolute"} top={{ xs: "5%", sm: "5%", md: "15%", lg: "15%", xl: "25%"}} sx={{ left: '5%', width: '40%' }}>
                <ScrollFadeIn>
                    <Typography fontSize={{ xs: "22px", sm: "26px", md: "40px", lg: "70px", xl: "80px"}} sx={{  textAlign: textAlignment }}>
                        {t("header.head")}
                        
                    </Typography>
                    <Typography fontSize={{ xs: "10px", sm: "13px", md: "15px", lg: "20px", xl: "20px"}} sx={{  textAlign: textAlignment }}>
                        {t("description.describe")}
                    </Typography>
                    <WelcomeButton />
                    </ScrollFadeIn>

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
            </Stack>
        </>
    )
}
